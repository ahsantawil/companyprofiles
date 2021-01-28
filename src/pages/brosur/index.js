import React from 'react'
import { Link } from 'react-router-dom'

const Brosur = () => {
    return (
        <div>
                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Brochures</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Brochures</li>
                            </ol>
                        </div>
                        </div>
                    </section>

                    <section id="testimonials" className="testimonials">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="testimonial-item">
                                        <h3>CSI21</h3>
                                        <h4>3G Modem</h4>
                                        <div>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Modem 3G AMR for Meter Communication 
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </div>
                                        <a target={"_blank"} className="btn btn-info" href={"https://drive.google.com/file/d/15mOMy9IjxQ9eTDcnKx3jbE-6rd73GYgs/view?usp=sharing"} rel={"noopener noreferrer"}><i className="bx bxs-downvote" /> Download</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="testimonial-item mt-4 mt-lg-0">
                                        <h3>CSI21-S</h3>
                                        <h4>4G Modem</h4>
                                        <div>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Modem 4G AMR For Meter Communication
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </div>
                                        <a target={"_blank"} className="btn btn-info" href={"https://drive.google.com/file/d/15mOMy9IjxQ9eTDcnKx3jbE-6rd73GYgs/view?usp=sharing"} rel={"noopener noreferrer"}><i className="bx bxs-downvote" /> Download</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="testimonial-item mt-4">
                                        <h3>CSI01-S</h3>
                                        <h4>Postpaid Meter</h4>
                                        <div>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            kWh Meter Postpaid 1 phase
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </div>
                                        <a target={"_blank"} className="btn btn-info" href={"https://drive.google.com/file/d/1HYiAG4yE8isjdpJFOY8tmWn_rDTZZGNs/view?usp=sharing"} rel={"noopener noreferrer"}><i className="bx bxs-downvote" /> Download</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="testimonial-item mt-4">
                                        <h3>CSI11</h3>
                                        <h4>Prepaid Meter</h4>
                                        <div>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            kWh Meter Prepad 1 Phase
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </div>
                                        <a target={"_blank"} className="btn btn-info" href={"https://drive.google.com/file/d/1UipPnBYaFCYuglnt56H5izG6SyuBDG30/view?usp=sharing"} rel={"noopener noreferrer"}><i className="bx bxs-downvote" /> Download</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="testimonial-item mt-4">
                                        <h3>Epower Sanplat</h3>
                                        <h4>Prepayment Vending System</h4>
                                        <div>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Software Vending System for kWh Meter 1 Phase
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </div>
                                        <a target={"_blank"} className="btn btn-info" href={"https://drive.google.com/file/d/15mOMy9IjxQ9eTDcnKx3jbE-6rd73GYgs/view?usp=sharing"} rel={"noopener noreferrer"}><i className="bx bxs-downvote" /> Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
        </div>
    )
}

export default Brosur
