import React, { Component } from 'react'
import { attribute4G_1, attribute4G_2, attribute4G_3, attribute4G_4, attribute4G_5, attribute4G_6, attribute4G_7, attribute4G_8 } from '../../../../assets'

export default class CSI21S extends Component {
    render() {
        return (
            <>
               <main id="main">
                    <section id="portfolio-details" className="portfolio-details">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <h2 className="portfolio-title">CSI21-S 4G Modem</h2>
                            <div className="owl-carousel portfolio-details-carousel">
                                <img src={attribute4G_1} className="img-fluid" alt="4g Modem" />
                                <img src={attribute4G_2} className="img-fluid" alt="4g Modem" />
                                <img src={attribute4G_3} className="img-fluid" alt="4g Modem" />
                                <img src={attribute4G_4} className="img-fluid" alt="4g Modem" />
                                <img src={attribute4G_5} className="img-fluid" alt="4g Modem" />
                                <img src={attribute4G_6} className="img-fluid" alt="4g Modem" />
                                <img src={attribute4G_7} className="img-fluid" alt="4g Modem" />
                                <img src={attribute4G_8} className="img-fluid" alt="4g Modem" />
                            </div>
                            </div>
                            <div className="col-lg-4 portfolio-info">
                                <h3>Feature information</h3>
                                <ul>
                                <li><strong>Frekuensi and Bands :</strong></li>
                                <li>GSM/EDGE/GPRS : 850/900/1800/1900MHz</li>
                                <li>3G/WCDMA : 900/2100MHz</li>
                                <li>4G LTE FDD: 900/1800/2100MHz</li>
                                <li>4G LTE TDD : 2300MHz</li>
                                <li><strong>Emissivity :</strong></li>
                                <li>30dBm (1W) to 36 dBm (4W)</li>
                                <li><strong>Speed (DL)/(UL)*</strong></li>
                                <li>4G LTE FDD 150Mbps/50Mbps</li>
                                <li>4G LTE TDD 130Mbps/30Mbps</li>
                                <li>HSDPA+ 42Mbps/5.76Mbps</li>
                                <li>WCDMA 384Kbps/384Kbps</li> 
                                <li>EDGE 296Kbps/236.8Kbps</li>
                                <li>GPRS 107Kbps/85.6Kbps</li>
                                <li><strong>Class</strong></li>
                                <li>GPRS Class B 12 Multislot</li>
                                <li><strong>Sensitivity</strong></li>
                                <li>-108dBm </li>
                                <li><strong>BER Test</strong></li>
                                <li> &lt;5% in 15 minutes </li>
                                <li><strong>Connection</strong></li>
                                <li>Auto Connect (Without ON/OFF Button) / Auto Search**</li>
                                <li><strong>GPS</strong></li>
                                <li>Active GPS</li>
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
