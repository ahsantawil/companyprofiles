import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AF, MTC, PT, QC, TC, WH } from '../../../assets'

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
                                    <h2>PT Citra Sanxing Indonesia</h2>
                                    <h3>Energy Meter Products</h3>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0">
                                    <ul>
                                        <li>
                                            <i className="ri-check-double-line" /> 
                                            PT Citra Sanxing Indonesia is a manufacturing company in Indonesia with meter-based electrical system products. 
                                            Started in 2011, the company is dedicated to research and development for devices or systems for electrical measurement. 
                                            PT Citra Sanxing Indonesia provides the best service along with professional technical support, in collaboration between Citra Group Indonesia and Ningbo Aux High Technology Co., Ltd
                                        </li>
                                        <li>
                                            <i className="ri-check-double-line" /> 
                                            PT Citra Sanxing Indonesia has complied with the ISO 9001: 2015 certificate for Quality Management Systems, 
                                            all products are certified by the SPM (Quality Control System) from PT PLN (Persero) Certification Center as a concrete measure of our quality assurance, 
                                            and all products are tested by PT PLN (Persero) Research and Development Center.
                                        </li>
                                    </ul>
                                    <p className="font-italic">
                                    All our modem products have been certified by the Directorate General of Resources and postal and information technology equipment (DIRJEN POSTEL)
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
                                                <img src={QC} className="img-fluid" alt="Title" />
                                            </div>
                                            <div className="member-info">
                                                <h4>QC Team</h4>
                                                <p>Quality Control</p>
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
                                            <img src={WH} className="img-fluid" alt="title" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Warehouse & PPIC</h4>
                                            <p>PPIC , Warehouse and Line Control</p>
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
                                            <img src={PT} className="img-fluid" alt="title" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Production Team</h4>
                                            <p>Product Production</p>
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
                                            <img src={MTC} className="img-fluid" alt="title" />
                                        </div>
                                        <div className="member-info">
                                            <h4>MTC Team</h4>
                                            <p>Maintenance Group</p>
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
                                            <img src={AF} className="img-fluid" alt="title" />
                                        </div>
                                        <div className="member-info">
                                            <h4>AFS Team</h4>
                                            <p>Support Aftersales</p>
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
                                            <img src={TC} className="img-fluid" alt="title" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Technology Team</h4>
                                            <p>Focus new innovation development product</p>
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
