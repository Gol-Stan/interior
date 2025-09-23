import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCoursesImage from "../../utils/images/cozy-modern-loft-with-comfortable-design-elements-generated-by-ai.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import Blog1Image from "../../utils/images/kitchen-4043098_1920.jpg";
import Blog2Image from "../../utils/images/kitchen-2165756_1280.jpg";
import Blog3Image from "../../utils/images/istockphoto-1837566278-612x612.webp";
import { useTranslation } from "react-i18next";

const blogImages = [Blog1Image, Blog2Image, Blog3Image];

function Home() {
    const { t } = useTranslation();
    const blogs = t("home.blog.posts", { returnObjects: true });

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>{t("home.welcome")}</h2>
                    <h1 className='text-center fw-semibold'>{t("home.title")}</h1>
                    <p>{t("home.subtitle")}</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/works">
                            <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                                {t("home.buttons.works")}
                            </button>
                        </Link>
                        <Link to="/contacts">
                            <button type="button" className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                                {t("home.buttons.contacts")}
                            </button>
                        </Link>
                        <Link to="/about">
                            <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                                {t("home.buttons.about")}
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className='py-5'>
                <ChooseSection />
            </div>

            <div className='py-5 bg-light'>
                <div className='container'>
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>{t("home.section_autumn_title")}</h2>
                            <p>{t("home.section_autumn_text")}</p>
                            <Link to={'/contacts'}>
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                    {t("home.contact_btn")}
                                </button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImage} className='img-fluid' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5'>
                <FaqAccordion />
            </div>

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>{t("home.blog.latest")}</h2>
                    <div className='row g-4'>
                        {blogs.map((blog, index) => (
                            <div key={index} className='col-md-6 col-lg-4'>
                                <Link to='/blog' className='text-decoration-none'>
                                    <Card className="h-100 shadow scale-hover-effect">
                                        <Card.Img variant='top' src={blogImages[index]} />
                                        <Card.Body className='p-md-5'>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to={'/blog'}>
                        <button type='button' className='btn btn-danger btn-lg mt-5'>
                            {t("home.blog.read_more")}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
