import React, { Component } from 'react';
import { Csi01 } from '../../../assets';

export class CSI01 extends Component {
    render() {
        return (
            <>
                <main id="main">
                    
                    <section id="portfolio-details" className="portfolio-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-title">CSI01</h2>
                                    <div className="owl-carousel portfolio-details-carousel">
                                        <img src={Csi01} className="img-fluid" alt="Product" />
                                        <img src={Csi01} className="img-fluid" alt="Product" />
                                        <img src={Csi01} className="img-fluid" alt="Product" />
                                    </div>
                                </div>
                                <div class="col-lg-4 portfolio-info">
                                    <h3>Product information</h3>
                                    <ul>
                                    <li>SPLN D3.005-1 : 2008</li>
                                    <li>5(40)A 230V 50Hz 2W and 10VA</li>
                                    <li>KELAS 1.0 3200 imp/kWh IP54</li>
                                    <li>Fase Tunggal 2 Kawat</li>
                                    <li>
                                        <a target={"_blank"} className="btn btn-info" href={"https://drive.google.com/file/d/15mOMy9IjxQ9eTDcnKx3jbE-6rd73GYgs/view?usp=sharing"} rel={"noopener noreferrer"}><i className="bx bxs-downvote" /> Download Brochures</a>
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

export default CSI01;
