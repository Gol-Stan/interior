import React, { useState } from "react";
import './Contacts.css';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";

function Contacts() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (i) => {
        setFormData({
            ...formData, [i.target.name]: i.target.value });
    };

    const handleSubmit = async (i) => {
        i.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/contacts/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert(t("contact.succes", "Message sent successfully!"));
                setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                 });
            } else {
                alert(t("contacts.error", "Error occurred!"));
            }
        } catch (error) {
            alert(t("contacts.server_error", "Server Error!"));
        }
    };


    return (
        <div className="contact-page">
            <header className="height-75">
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className="text-center fw-semibold">{t("contacts.title")}</h1>
                    <p className="text-center w-75 mb-5">{t("contacts.subtitle")}</p>
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form' className="w-75" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col sm={12} md={6} className="mb-3 mb-md-0">
                            <Form.Label>{t("contacts.firstName")}</Form.Label>
                            <Form.Control
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder={t("contacts.firstName")}
                            />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>{t("contacts.lastName")}</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder={t("contacts.lastName")}
                                />
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>{t("contacts.email")}</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("contacts.email")}
                        />
                        <Form.Text className="text-muted">
                            {t("contacts.email_hint")}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t("contacts.phone")}</Form.Label>
                        <Form.Control
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t("contacts.phone")}
                        />
                        <Form.Text className="text-muted">
                            {t("contacts.phone_hint")}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t("contacts.address")}</Form.Label>
                        <Form.Control
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder={t("contacts.address")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t("contacts.message")}</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t("contacts.message")}
                        />
                    </Form.Group>

                    <Button variant="danger btn-lg" type="submit">
                        {t("contacts.submit")}
                    </Button>
                </Form>
            </div>

            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>{t("contacts.location")}</h2>
                    <div className='row g-4'>
                        <div className='col-lg-4 d-flex flex-column align-items-center'>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacts;