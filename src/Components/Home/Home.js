import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner-2.jpg'
import banner2 from '../../images/banner-1.jpg'
import banner3 from '../../images/banner-3.jpg'
import userPhoto from '../../images/user.png'
import './Home.css'

const Home = () => {
    const [books, setBook] = useState([]);
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        // const url = 'https://fast-dusk-28001.herokuapp.com/event';
        const url = 'https://evening-fortress-44485.herokuapp.com/books';
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, []);

    useEffect(() => {
        const url = 'https://evening-fortress-44485.herokuapp.com/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return (
        <div>
            {/* Slider */}
            <div className="container-fluid bg-light">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="d-block img-fluid image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="d-block img-fluid image" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block img-fluid image" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Provides */}
            <div className="container my-3 p-3 px-0">
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    <div className="col bg-light rounded">
                        <div className="card h-100 shadow border-light">
                            <p className="fs-3 m-auto fw-bold py-4 text-success"><i className="fas fa-truck"></i> Faster Delivery</p>
                        </div>
                    </div>
                    <div className="col bg-light rounded">
                        <div className="card h-100 shadow border-light">
                            <p className="fs-3 m-auto fw-bold py-4 text-success"><i className="fas fa-map-marker-alt"></i> Anywhere in Bangladesh</p>
                        </div>
                    </div>
                    <div className="col bg-light rounded">
                        <div className="card h-100 shadow border-light">
                            <p className="fs-3 m-auto fw-bold py-4 text-success"><i className="fas fa-check-double"></i> Refund Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collection Item */}
            <div className="container my-3 px-0">
                <h1 className="text-center p-3 bg-color rounded">OUR COLLECTIONS</h1>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {
                        books.slice(0, 6).map(book => <div className="col" key={book._id}>
                            <div className="card h-100 border-success">
                                <img src={book.img} className="card-img-top img-fluid images" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><span className="fw-bold">Book Name: </span> {book.title}</h5>
                                    <h5 className="card-title"><span className="fw-bold">Author: </span> {book.author}</h5>
                                    <h5 className="card-title"><span className="fw-bold">Price: </span> {book.price} BDT</h5>
                                    <Link to={`/bookDetails/${book._id}`}><button className="btn btn-dark p-2 fw-bold text-white">Details <i class="fas fa-angle-double-right"></i></button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* Client Says */}
            <div className="container my-3 px-0">
                <h1 className="text-center p-3 bg-color rounded">OUR CLIENT SAYS</h1>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {
                        reviews.slice(0, 6).map(review => <div className="col" key={review._id}>
                            <div className="card h-100 border-warning text-center p-3">
                                <img className="user-image" src={review?.userPhoto ? review?.userPhoto : userPhoto} alt="" />
                                <h5 className="card-title p-2 bg-success rounded-pill">{review.userName}</h5>
                                <div className="card-body">
                                    <h5 className="card-title">{review.review}</h5>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* FAQ */}
            <div className="container my-3 px-0">
                <h1 className="text-center p-3 bg-color rounded">ASK FREQUENTLY</h1>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                WHO WE ARE..?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                The merchants of "Nilkhet" do not yet have access to an online platform where they may sell their books. They just have a Facebook page / group. The major goal is to put all of "Nilkhet's" bookshops into a single online platform.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                OUR GOAL..?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                They also minimize customers toil by providing online book purchase to prevent crowding at "Nilkhet". As well as client satisfaction
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                This is the third item's accordion body.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;