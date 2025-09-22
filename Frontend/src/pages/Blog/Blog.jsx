import React from "react";
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import BlogImg1 from '../../utils/images/kitchen-4043098_1920.jpg'
import BlogImg2 from '../../utils/images/kitchen-4043098_1920.jpg'
import BlogImg3 from '../../utils/images/kitchen-4043098_1920.jpg'
import BlogImg4 from '../../utils/images/kitchen-4043098_1920.jpg'
import { useTranslation } from 'react-i18next';

const Images = [BlogImg1, BlogImg2, BlogImg3, BlogImg4];

function Blog() {
    const { t } = useTranslation();

    const data = t("blogs", { returnObjects: true });
    // data = { blogTitle, blogDescription, blogs: [...] }

    return (
        <div className="blog-page">
            <header className="height-75">
                <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className="text-center fw-semibold">{data.blogTitle}</h1>
                    <p className='text-center w-75 mb-5'>{data.blogDescription}</p>
                </div>
            </header>

            <div className="bg-body-tertiary py-5">
                <div className='container'>
                    <div className='row g-4'>
                        {data.blogs.map((blog, index) => (
                            <div key={index} className='col-md-6 col-lg-4'>
                                <Link to='/blog' className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                        <Card.Img variant="top" src={Images[index]} />
                                        <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                            <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                            <Card.Text className='text-center'>{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;