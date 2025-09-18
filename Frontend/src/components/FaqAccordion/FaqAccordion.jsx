import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion(props) {
    return (
        <div className="faq-section">
            <div className="container d-flex flex-column align-items-center">
                <h2 className='text-center text-capitalize mb-5'>Frequently asked question</h2>
                <p className='text-center mb-5'>Lorem inpsum dolor sit</p>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>First Question</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Second Question</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Third Question</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
export default FaqAccordion;