import React, { Component } from 'react';
import {
    Slide1, Slide2, Slide3, Pln,
    Amartha, Gps, Aff, Sudirman, Wika, Sx,
    P12A4, Csi11, Csi01, Csi32, Vending, modem3G, modem4G
    } from '../../assets';

export default class Home extends Component {
    render() {

        const source = 'https://www.youtube.com/embed/HtyPJ4Mup_g';
        return (
            <>
                <section id="hero">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators" id="hero-carousel-indicators" />
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active" style={{backgroundImage: `url(${Slide1})`}}>
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Citra Sanxing Indonesia</span></h2>
                                        <p className="animate__animated animate__fadeInUp">Quality is the foundation, innovation is the soul</p>
                                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{backgroundImage: `url(${Slide2})`}}>
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">Selamat Datang di <span>Citra Sanxing Indonesia</span></h2>
                                        <p className="animate__animated animate__fadeInUp">Kualitas adalah pondasi, Inovasi adalah jiwa.</p>
                                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" style={{backgroundImage: `url(${Slide3})`}}>
                                <div className="carousel-container">
                                    <div className="container">
                                        <h2 className="animate__animated animate__fadeInDown">Citra Sanxing Indonesia</h2>
                                        <p className="animate__animated animate__fadeInUp">Kualitas Adalah Pondasi, Inovasi adalah Jiwa.</p>
                                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <main id="main">
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
                    <section id="clients" className="clients section-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src={Pln} className="img-fluid" alt="Consumers" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src={Amartha} className="img-fluid" alt="Consumers" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src={Gps} className="img-fluid" alt="Consumers" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src={Aff} className="img-fluid" alt="Consumers" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src={Sudirman} className="img-fluid" alt="Consumers" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src={Wika} className="img-fluid" alt="Consumers" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="services" className="services">
                        <div className="container">
                            <div className="section-title">
                                <h2>Videos</h2>
                                <p>The Sanxing Indonesia Profiles</p>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="icon-box">
                                        <iframe className="align-self-center" title="Citra Sanxing Indonesia" width="100%" height={400} src={source} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="icofont-chart-bar-graph" />
                                        <h4>
                                            <a href="#">Growth</a>
                                        </h4>
                                        <ul>
                                            <li>
                                            Founded in 2011.
                                            The initial capacity is 500,000 per year.
                                            </li>
                                            <li>
                                            Production capacity in 2014 was 1,200,000 per year.
                                            </li>
                                            <li>                
                                            The production capacity in 2016 is 2,400,000 per year.
                                            </li>
                                            <li>
                                            Until 2020, kWh Meter production is around 7 million.
                                            </li>
                                            <li>
                                            Tens of thousands of communication modems have been produced since they were produced in 2019
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="portfolio" className="portfolio">
                        <div className="container">
                            <div className="section-title">
                                <h2>Product</h2>
                                <p>Recent Product</p>
                            </div>
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
                                            <a href="pages/product/details/Meter1.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
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
                                                <a href="pages/product/details/Meter2.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
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
                                                <a href="pages/product/details/Meter3.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
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
                                                <a href="pages/product/details/Meter4.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Products Details"><i className="bx bx-link" /></a>
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
                                                <a href="pages/product/details/Meter5.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Products Details"><i className="bx bx-link" /></a>
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
                                                <a href="pages/product/details/Modem3g.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Products Details"><i className="bx bx-link" /></a>
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
                                        <a href="pages/product/details/Modem4g.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Product Details"><i className="bx bx-link" /></a>
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
                                                <a href="pages/product/details/Vending.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Vending System Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
            </>
        )
    }
}
