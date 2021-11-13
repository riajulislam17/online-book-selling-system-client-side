import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const BookDetails = () => {
    const { user } = useAuth();
    const [book, setBook] = useState({});
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [review, setReview] = useState('')
    const { id } = useParams();

    const handlePhone = e => {
        setPhone(e.target.value)
    }
    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handleReview = e => {
        setReview(e.target.value)
    }

    useEffect(() => {
        const url = `https://evening-fortress-44485.herokuapp.com/books/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id]);

    const buyBook = e => {
        const userName = user.displayName;
        const userEmail = user.email;
        const title = book.title;
        const orderBook = { userName, userEmail, title, phone, address };
        fetch('https://evening-fortress-44485.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Successfully.');
                }
            })
        e.preventDefault();
    }

    const postReview = e => {
        e.preventDefault();
        const userName = user.displayName;
        const userEmail = user.email;
        const userPhoto = user.photoURL;
        const newBook = { userName, userEmail, review, userPhoto };
        fetch('https://evening-fortress-44485.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Successfully.');
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <div className="container my-3 shadow p-3">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={book.img} className="img-fluid rounded-start book-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><span className="fw-bold">Title:</span> {book.title}</h5>
                                <h5 className="card-title"><span className="fw-bold">Author:</span> {book.author}</h5>
                                <h5 className="card-title"><span className="fw-bold">Publisher:</span> {book.publisher}</h5>
                                <h5 className="card-title"><span className="fw-bold">Price:</span> {book.price}</h5>
                                <h5 className="card-title"><span className="fw-bold">Description:</span> {book.description}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    {/* Order Form */}
                    <form onSubmit={buyBook} className="me-2 w-50">
                        <div className="row my-2">
                            <div className="input-group">
                                <div className="input-group-text fw-bold"><i className="fas fa-user"></i></div>
                                <input type="text" className="form-control" onChange="" value={user.displayName || ''} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group">
                                <div className="input-group-text fw-bold"><i className="fas fa-envelope"></i></div>
                                <input type="email" className="form-control" onChange="" value={user.email || ''} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group">
                                <div className="input-group-text fw-bold"><i className="fas fa-phone"></i></div>
                                <input type="number" className="form-control" onBlur={handlePhone} placeholder="Enter Phone Number" required />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group">
                                <div className="input-group-text fw-bold"><i className="fas fa-map-pin"></i></div>
                                <textarea type="text" className="form-control" onBlur={handleAddress} placeholder="Enter Delivery Address" required />
                            </div>
                        </div>

                        <button className="btn btn-dark p-2 fw-bold text-white"><i class="fas fa-shopping-cart"></i> BUY BOOK</button>
                    </form>

                    {/* Review Form */}
                    <form onSubmit={postReview} className="ms-2 w-50">
                        <div className="row my-2">
                            <div className="input-group">
                                <div className="input-group-text fw-bold"><i className="fas fa-user"></i></div>
                                <input type="text" className="form-control" onChange="" value={user.displayName || ''} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group">
                                <div className="input-group-text fw-bold"><i className="fas fa-envelope"></i></div>
                                <input type="email" className="form-control" onChange="" value={user.email || ''} />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group">
                                <div className="input-group-text fw-bold"><i class="fas fa-comment-dots"></i></div>
                                <textarea type="text" className="form-control" onBlur={handleReview} placeholder="Enter Your Review" required />
                            </div>
                        </div>
                        <button className="btn btn-dark p-2 fw-bold text-white"><i class="fas fa-pen"></i> POST REVIEW</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;