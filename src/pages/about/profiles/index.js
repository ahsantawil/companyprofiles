import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profiles extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Bussines Profiles</h2>
                                <ol>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                <li>Profiles</li>
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
                </main>
            </>
        )
    }
}
