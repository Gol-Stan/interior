import React from "react";
import './Contacts.css';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Contacts() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (i) => {
        setFormData({
            ...formData,
            [i.target.name]: i.target.value,
        });
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
                alert("Message sent successfully!");
                setFormData({firsName: "", lastName: "", email: "", phone: "", message: "", });
            } else {
                alert("Error occured!");
            }
        } catch (error) {
            alert("Server Error!");
        }
    };


    return (
        <div className="contact-page">
            <header className="height-75">
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className="text-center fw-semibold">Contacts</h1>
                    <p className="text-center w-75 mb-5"> Lorem</p>
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form' className="w-75">
                    <Row className="mb-3">
                        <Col sm={12} md={6} className="mb-3 mb-md-0">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder='First Name' />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder='Last Name' />
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control placeholder='Email' />
                        <Form.Text className="text-muted">
                            We keep it secret
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control placeholder='Phone' />
                        <Form.Text className="text-muted">
                            We keep it safe
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder='Address' />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as='textarea' rows={3} />
                    </Form.Group>

                    <Button variant="danger btn-lg" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            <div className='bg-dark text-light p-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Our Location</h2>
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