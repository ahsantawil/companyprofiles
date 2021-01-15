import React, { Component } from 'react';
import { Csi11 } from '../../../assets';

export class CSI11 extends Component {
    render() {
        return (
            <main id="main">
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="portfolio-title">CSI11</h2>
                                <div className="owl-carousel portfolio-details-carousel">
                                    <img src={Csi11} className="img-fluid" alt="Product" />
                                    <img src={Csi11} className="img-fluid" alt="Product" />
                                    <img src={Csi11} className="img-fluid" alt="Product" />
                                </div>
                            </div>
                            <div className="col-lg-4 portfolio-info">
                                <h3>Product information</h3>
                                <ul>
                                    <li>SPLN D3.009-1 : 2010</li>
                                    <li>5(60)A 230V 50Hz 2W and 10VA</li>
                                    <li>KELAS 1.0 6400imp/kWh</li>
                                    <li>IP54</li>
                                    <li>Fase Tunggal 2 Kawat</li>
                                    <li>Fungsi 2S-Fungsi 2R</li>
                                    <li>LMK</li>
                                    <li>
                                        <a target={"_blank"} className="btn btn-info" href={"https://drive.google.com/file/d/15mOMy9IjxQ9eTDcnKx3jbE-6rd73GYgs/view?usp=sharing"} rel={"noopener noreferrer"}><i className="bx bxs-downvote" /> Download Brochures</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default CSI11;
