import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Pln } from '../../../assets';

export default class Honor extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Honor & Certification</h2>
                            <ol>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>Honor</li>
                            </ol>
                        </div>
                        </div>
                    </section>

                    <section id="testimonials" className="testimonials">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Certificat or Honor</h5>
                                            <img src={Pln} className="card-img-top" alt="" />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Certificat or Honor</h5>
                                            <img src={Pln} className="card-img-top" alt="" />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Certificat or Honor</h5>
                                            <img src={Pln} className="card-img-top" alt="" />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Certificat or Honor</h5>
                                            <img src={Pln} className="card-img-top" alt="" />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Certificat or Honor</h5>
                                            <img src={Pln} className="card-img-top" alt="" />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Certificat or Honor</h5>
                                            <img src={Pln} className="card-img-top" alt="" />
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </>
        )
    }
}
