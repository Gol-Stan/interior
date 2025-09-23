import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from "react-i18next";

function FaqAccordion(props) {
    const { t } = useTranslation();
    const faq = t('faq', { returnObjects: true });

    return (
        <div className="faq-section">
            <div className="container d-flex flex-column align-items-center">
                <h2 className='text-center text-capitalize mb-5'>{faq.title}</h2>
                <p className='text-center mb-5'>{faq.subtitle}</p>
                <Accordion defaultActiveKey="" flush>
                    {faq.questions.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
export default FaqAccordion;