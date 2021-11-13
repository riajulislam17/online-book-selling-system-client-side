import React from 'react';
import {Switch, Route, Link, useRouteMatch} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import OrderList from './OrderList/OrderList';
import ReviewList from './ReviewList/ReviewList';
import userPhoto from '../../images/user.png'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth();

    return (
        <div>
            <div className="container my-5 shadow p-3 rounded">
                <div className="container">
                    <div className="row g-2">
                        <div className="col-3 g-2">
                            <div className="p-3 border bg-light">
                                <img className="img-fluid d-flex justify-content-center userImage" src={user?.photoURL ? user.photoURL : userPhoto} alt="" />
                                <h5 className="fw-bold text-success">{ user?.displayName}</h5>
                                <h5 className="fw-bold text-success">{ user?.email}</h5>
                            </div>
                            <div className="p-3 border bg-light">
                                <Link to={`${url}/orderList`} className="text-decoration-none fw-bold"><i className="fas fa-tasks"></i> Order List</Link>
                            </div>
                            <div className="p-3 border bg-light">
                                <Link to={`${url}/reviewList`} className="text-decoration-none fw-bold"><i className="fas fa-pen"></i> Review List</Link>
                            </div>
                        </div>
                        <div className="col-9">
                            <Switch>
                                <Route exact path={path}>
                                    <OrderList></OrderList>
                                </Route>
                                <Route path={`${path}/orderList`}>
                                    <OrderList></OrderList>
                                </Route>

                                <Route path={`${path}/reviewList`}>
                                    <ReviewList></ReviewList>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;