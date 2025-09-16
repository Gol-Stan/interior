import React from "react";
import './About.css';
import { Link } from "react-router-dom";
import AboutUsSectionImg from '../../utils/images/home-1622401_1920.jpg'
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Client1 from '../../utils/images/115783931601b5c.webp'
import Client2 from '../../utils/images/company-logo-transparent-png-19.png'
import Client3 from '../../utils/images/_-mWIBoT95TO3mX.png'

const clients = [
    {
        id: 1,
        img: [Client1]
    },
    {
        id: 2,
        img: [Client2]
    },
    {
        id: 3,
        img: [Client3]
    },

];

function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>About Us</h1>
                    <p className='text-center w-75 mb-5'>Lorem Morem Borem</p>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>Study with Us</h2>
                        <p>Lorem Orem Dorem Korem</p>
                        <p className='mb-4 mb-lg-5'>Lorem Orem Dorem Korem</p>
                        <Link to='/contact'>
                            <button type='button' className='btn btn-danger btn-lg mx-o mx-sm my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutUsSectionImg} className='img-fluid w-75' alt='' />
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <ChooseSection />
            </div>

            <div className='bg-body-tertiary py-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>Our clients</h2>
                    <div className='row g-4'>
                        {clients.map((client) => (
                            <div key={client.id} className='col-md-4'>
                                <img src={client.img} className='img-fluid' alt='' />
                            </div>
                            ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;