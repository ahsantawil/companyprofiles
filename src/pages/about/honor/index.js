import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ISO14001, ISO9001, OHSAS, K3, Modem1, SPMCSI01 } from '../../../assets';

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
                                            <h5 className="card-title">ISO 9001:2015</h5>
                                            <img src={ISO9001} className="card-img-top" alt="" />
                                            <p className="card-text">
                                                Quality Management System, Manufacture of Electricity Meters
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">ISO 14001:2015</h5>
                                            <img src={ISO14001} className="card-img-top" alt="" />
                                            <p className="card-text">
                                                Manufacture of Equipment for Electricity Control and Distribution
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">OHSAS 18001:2007</h5>
                                            <img src={OHSAS} className="card-img-top" alt="" />
                                            <p className="card-text">
                                                Manufacture of Equipment for Electricity Control,
                                                Distribution and Telecommunication Device
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">SMK3</h5>
                                            <img src={K3} className="card-img-top" alt="" />
                                            <p className="card-text">
                                                Sistem Manajemen Keselamatan dan kesehatan kerja    
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">Postel 3G Modem</h5>
                                            <img src={Modem1} className="card-img-top" alt="" />
                                            <p className="card-text">Dirjen Postel for CSI21 (3G Modem)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card mt-4 mt-lg-0">
                                        <div className="card-body">
                                            <h5 className="card-title">SPM CSI01</h5>
                                            <img src={SPMCSI01} className="card-img-top" alt="" />
                                            <p className="card-text">
                                                Sistem Pengawasan Mutu for CSI01 Meter Postpaid 1phase
                                            </p>
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
