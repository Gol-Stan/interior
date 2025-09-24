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
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
    });

    const handleChange = (i) => {
        setFormData({
            ...formData, [i.target.name]: i.target.value });
    };

    const API_URL = process.env.REACT_APP_API_URL;

    const handleSubmit = async (i) => {
        i.preventDefault();
        try {
            const response = await fetch("${API_URL}/contact/send", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert(t("contacts.succes", "Message sent successfully!"));
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: '',
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
                            <Form.Label>{t("contacts.first_name")}</Form.Label>
                            <Form.Control
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder={t("contacts.first_name")}
                            />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>{t("contacts.last_name")}</Form.Label>
                            <Form.Control
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder={t("contacts.last_name")}
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