import React, { Component } from 'react'
import { Csi32 } from '../../../../assets'

export default class CSI32 extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="portfolio-details" className="portfolio-details">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <h2 className="portfolio-title">CSI32</h2>
                            <div className="owl-carousel portfolio-details-carousel">
                                <img src={Csi32} className="img-fluid" alt="3Phase Meter" />
                                <img src={Csi32} className="img-fluid" alt="3Phase Meter" />
                                <img src={Csi32} className="img-fluid" alt="3Phase Meter" />
                            </div>
                            </div>
                            <div className="col-lg-4 portfolio-info">
                            <h3>Product information</h3>
                            <ul>
                                <li><strong>Category</strong>:kWh Meter 3Phase AMR</li>
                                <li><strong>Client</strong>: PLN</li>
                                <li><strong>SPLN</strong>: -</li>
                                <li>
                                <a href="#" className="btn btn-primary">Download Brochures</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
