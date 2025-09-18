import React from "react";
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import BlogImg1 from '../../utils/images/kitchen-4043098_1920.jpg'
import BlogImg2 from '../../utils/images/kitchen-4043098_1920.jpg'
import BlogImg3 from '../../utils/images/kitchen-4043098_1920.jpg'
import BlogImg4 from '../../utils/images/kitchen-4043098_1920.jpg'

const blogs = [
    {
        id: 1,
        img: BlogImg1,
        title: 'Blog1',
        description: 'Lorem'
    },
    {
        id: 2,
        img: BlogImg2,
        title: 'Blog2',
        description: 'Lorem'
    },
    {
        id: 3,
        img: BlogImg3,
        title: 'Blog3',
        description: 'Lorem'
    },
    {
        id: 4,
        img: BlogImg4,
        title: 'Blog4',
        description: 'Lorem'
    },
]

function Blog() {
    return (
        <div className="blog-page">
            <header className="height-75">
                <div className="container h-100 d-flex flex-column align-items-center justify-content-centert text-light">
                    <h1 className="text-center fw-semibold">Blog</h1>
                    <p className='text-center w-75 mb-5'>Lorem</p>
                </div>
            </header>

            <div className="bg-body-tertiary py-5">
                <div className='container'>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to='/blog' className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                        <Card.Img variant="top" src={blog.img} />
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
    )
}

export default Blog;