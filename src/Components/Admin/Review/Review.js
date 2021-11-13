import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        const url = 'https://evening-fortress-44485.herokuapp.com/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return (
        <div>
            <div className="container rounded">
                <h1 className="text-center">REVIEW LIST</h1>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-lg-12 col-12">
                            {
                                reviews.map(review => <div key={review._id} className="card-body">
                                    <h5 className="card-title"><span className="fw-bold"><i className="fas fa-user"></i></span> {review.userName}</h5>
                                    <h5 className="card-title"><span className="fw-bold"><i className="fas fa-envelope"></i></span> {review.userEmail}</h5>
                                    <h5 className="card-title"><span className="fw-bold"><i class="fas fa-pen"></i></span> {review.review}</h5>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;