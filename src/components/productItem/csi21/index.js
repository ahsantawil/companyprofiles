import React, { Component } from 'react';
import {
    attribute3G_1, attribute3G_2, attribute3G_3,
    attribute3G_4, attribute3G_5, attribute3G_6, attribute3G_7,
    attribute3G_8, attribute3G_9
} from '../../../assets';

export default class CSI21 extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Product Details</h2>
                            </div>
                        </div>
                    </section>
                    <section id="portfolio-details" className="portfolio-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-title">CSI21 3G Modem</h2>
                                    <div className="owl-carousel portfolio-details-carousel">
                                        <img src={attribute3G_1} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_2} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_3} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_4} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_5} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_6} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_7} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_8} className="img-fluid" alt="Modem 3G" />
                                        <img src={attribute3G_9} className="img-fluid" alt="Modem 3G" />
                                    </div>
                                </div>
                                <div className="col-lg-4 portfolio-info">
                                    <h3>Feature information</h3>
                                    <ul>
                                        <li><strong>Frekuensi</strong></li>
                                        <li>2G: 900/1800MHz</li>
                                        <li>3G: 900/2100MHz</li>
                                        <li><strong>Work Mode</strong></li>
                                        <li>UMTS (WCDMA)  : 900/2100MHz</li>
                                        <li>GSM/GPRS/EDGE : 900/1800MHz</li>
                                        <li>CSD</li>
                                        <li><strong>GPRS</strong></li>
                                        <li>Client Mode</li>
                                        <li>Server Mode</li>
                                        <li><strong>SMS</strong></li>
                                        <li>SMS</li>
                                        <li>1.8V/3V SIM Interface</li>
                                        <li>Text &amp; PDU</li>
                                        <li>Point to point (MT/MO)</li>
                                        <li>Cell broadcast</li>
                                        <li><strong>RS-232 Interface</strong></li>
                                        <li>DB9 female port </li>
                                        <li>Standard Serial Interface</li>
                                        <li>Baud rate (bits/s): Programmable Setup</li>
                                        <li>Disable/enable DTR/CTS</li>
                                        <li><strong>Aplikasi</strong></li>
                                        <li>Mode Transparan dan Non Transparan</li>
                                        <li>Fasilitas AT Command</li>
                                        <li>Dapat bekerja dengan berbagai tipe meter</li>
                                        <li>Dapat dikonfigurasi jarak jauh (remote)</li>
                                        <li><strong>Indikasi LED</strong></li>
                                        <li>Merah</li>
                                        <li>Merah Berkedip Cepat : Sedang Berkomunikasi</li>
                                        <li>Merah Berkedip : Standby</li>
                                        <li>Merah Selalu ON : Hang</li>
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
