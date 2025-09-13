import React from "react";
import './Home.css';
import {Link} from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome</h2>
                    <h1 className='text-center fw-semibold'>Alcov Interior Design</h1>
                    <p>Lorem</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                        <Link to="/>works">
                            <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">Our Works</button>
                        </Link>
                        <Link to="/>contacts">
                            <button type="button" className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0">Our Contacts</button>
                        </Link>
                        <Link to="/>about">
                            <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">About Us</button>
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
                            <h2 className='text-capitalize'>Starting this Autumn </h2>
                            <p>Lorem ipsum</p>
                            <Link to={'/contacts'}>
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact for more info</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;