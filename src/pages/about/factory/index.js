import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Factory extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Factory</h2>
                                <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Factory</li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about">
                        <div className="container">
                            <div className="row content">
                                <div className="col-lg-6">
                                    <h2>Eum ipsam laborum deleniti velitena</h2>
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0">
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                                        <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                                    </ul>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="team" className="team section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Team</h2>
                                <p>Our Hardowrking Team</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="member d-flex align-items-start">
                                            <div className="pic">
                                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="Title" />
                                            </div>
                                            <div className="member-info">
                                                <h4>QC Team</h4>
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
                                        <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="title" /></div>
                                        <div className="member-info">
                                            <h4>Warehouse & PPIC</h4>
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
                                        <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="title" /></div>
                                        <div className="member-info">
                                            <h4>Production Team</h4>
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
                                        <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="title" /></div>
                                        <div className="member-info">
                                            <h4>MTC Team</h4>
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
                                <div className="col-lg-6 mt-4">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic">
                                            <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="title" />
                                        </div>
                                        <div className="member-info">
                                            <h4>AFS Team</h4>
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
                                <div className="col-lg-6 mt-4">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="title" /></div>
                                        <div className="member-info">
                                            <h4>Technologi Team</h4>
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
