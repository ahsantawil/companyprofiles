import React, { Component } from 'react'

export default class Videos extends Component {
    render() {
        return (
            <>
                <main id="main">

                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Videos</h2>
                                <ol>
                                <li><a href="../../index.html">Home</a></li>
                                <li>Videos</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    <section id="team" className="team ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic">
                                            <img src="../../assets/img/team/team-1.jpg" className="img-fluid" alt />
                                        </div>
                                        <div className="member-info">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                            <p>Explicabo voluptatem mollitia et repellat</p>
                                            <div className="social">
                                                <a href><i className="ri-twitter-fill" /></a>
                                                <a href><i className="ri-facebook-fill" /></a>
                                                <a href><i className="ri-instagram-fill" /></a>
                                                <a href> <i className="ri-linkedin-box-fill" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 mt-lg-0">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic">
                                            <img src="../../assets/img/team/team-2.jpg" className="img-fluid" alt />
                                        </div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                            <p>Aut maiores voluptates amet et quis</p>
                                            <div className="social">
                                                <a href><i className="ri-twitter-fill" /></a>
                                                <a href><i className="ri-facebook-fill" /></a>
                                                <a href><i className="ri-instagram-fill" /></a>
                                                <a href> <i className="ri-linkedin-box-fill" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic">
                                            <img src="../../assets/img/team/team-3.jpg" className="img-fluid" alt />
                                        </div>
                                        <div className="member-info">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                            <p>Quisquam facilis cum velit laborum corrupti</p>
                                            <div className="social">
                                                <a href><i className="ri-twitter-fill" /></a>
                                                <a href><i className="ri-facebook-fill" /></a>
                                                <a href><i className="ri-instagram-fill" /></a>
                                                <a href> <i className="ri-linkedin-box-fill" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic">
                                            <img src="../../assets/img/team/team-4.jpg" className="img-fluid" alt />
                                        </div>
                                        <div className="member-info">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                            <p>Dolorum tempora officiis odit laborum officiis</p>
                                            <div className="social">
                                                <a href><i className="ri-twitter-fill" /></a>
                                                <a href><i className="ri-facebook-fill" /></a>
                                                <a href><i className="ri-instagram-fill" /></a>
                                                <a href> <i className="ri-linkedin-box-fill" /> </a>
                                            </div>
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
