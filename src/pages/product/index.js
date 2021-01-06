import React, { Component } from 'react';
import {
    Sx,
    P12A4, Csi11, Csi01, Csi32, Vending, modem3G, modem4G
    } from '../../assets';
import { CSI01, CSI11,CSI21, CSI21S, CSI32, vending } from './details';

export default class Product extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Product</h2>
                                <ol>
                                    <li><a href="../../index.html">Home</a></li>
                                    <li>Product</li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <section id="portfolio" className="portfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-prepaid">Prepaid Meter</li>
                                        <li data-filter=".filter-postpaid">Postpaid Meter</li>
                                        <li data-filter=".filter-modem">Modem</li>
                                        <li data-filter=".filter-vending">Vending System</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row portfolio-container">
                                <div className="col-lg-4 col-md-6 portfolio-item filter-prepaid">
                                    <div className="portfolio-wrap">
                                        <img src={Sx} className="img-fluid" alt="Product" />
                                            <div className="portfolio-info">
                                                <h4>SX1A0</h4>
                                                <p>Meter 1phase Prabayar Generation one</p>
                                                <div className="portfolio-links">
                                                    <a href={Sx} data-gall="portfolioGallery" className="venobox" title="SX1A0"><i className="bx bx-plus" /></a>
                                                    <a href="#" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-prepaid">
                                    <div className="portfolio-wrap">
                                        <img src={P12A4} className="img-fluid" alt="Product" />
                                        <div className="portfolio-info">
                                            <h4>P12A4</h4>
                                            <p>Meter 1phase Prabayar Generation Two</p>
                                            <div className="portfolio-links">
                                                <a href={P12A4} data-gall="portfolioGallery" className="venobox" title="P12A4"><i className="bx bx-plus" /></a>
                                                <a href="#" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-prepaid">
                                    <div className="portfolio-wrap">
                                        <img src={Csi11} className="img-fluid" alt="Product" />
                                        <div className="portfolio-info">
                                            <h4>CSI11</h4>
                                            <p>Meter 1phase Prabayar Generation Three</p>
                                            <div className="portfolio-links">
                                                <a href={Csi11} data-gall="portfolioGallery" className="venobox" title="CSI11"><i className="bx bx-plus" /></a>
                                                <a href={CSI11} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-postpaid">
                                    <div className="portfolio-wrap">
                                        <img src={Csi01} className="img-fluid" alt="Product" />
                                        <div className="portfolio-info">
                                        <h4>CSI01</h4>
                                        <p>Meter 1phase Postpaid Generation One</p>
                                            <div className="portfolio-links">
                                                <a href={Csi01} data-gall="portfolioGallery" className="venobox" title="CSI01"><i className="bx bx-plus" /></a>
                                                <a href={CSI01} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Products Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-postpaid">
                                    <div className="portfolio-wrap">
                                    <img src={Csi32} className="img-fluid" alt="Product" />
                                        <div className="portfolio-info">
                                        <h4>CSI32</h4>
                                        <p>Meter 3Phase Postpaid AMR kWh Meter</p>
                                            <div className="portfolio-links">
                                                <a href={Csi32} data-gall="portfolioGallery" className="venobox" title="CSI32"><i className="bx bx-plus" /></a>
                                                <a href={CSI32} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Products Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-modem">
                                    <div className="portfolio-wrap">
                                        <img src={modem3G} className="img-fluid" alt="Product" />
                                        <div className="portfolio-info">
                                            <h4>CSI21</h4>
                                            <p>3G Modem Communication</p>
                                            <div className="portfolio-links">
                                                <a href={modem3G} data-gall="portfolioGallery" className="venobox" title="CSI21"><i className="bx bx-plus" /></a>
                                                <a href={CSI21} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Products Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-modem">
                                    <div className="portfolio-wrap">
                                        <img src={modem4G} className="img-fluid" alt="Product" />
                                        <div className="portfolio-info">
                                            <h4>CSI21-S</h4>
                                            <p>4G Modem Communication</p>
                                            <div className="portfolio-links">
                                                <a href={modem4G} data-gall="portfolioGallery" className="venobox" title="CSI21-S"><i className="bx bx-plus" /></a>
                                                <a href={CSI21S} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-vending">
                                    <div className="portfolio-wrap">
                                        <img src={Vending} className="img-fluid" alt="Product" />
                                        <div className="portfolio-info">
                                            <h4>Vending System</h4>
                                            <p>Sanplat Prepayment Vending System STS 1phase</p>
                                            <div className="portfolio-links">
                                                <a href={Vending} data-gall="portfolioGallery" className="venobox" title="Vending System"><i className="bx bx-plus" /></a>
                                                <a href={vending} data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Vending System Details"><i className="bx bx-link" /></a>
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
