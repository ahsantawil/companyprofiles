import React from 'react'
import { Link } from 'react-router-dom'
import { Disjaya1, ISO, Ningbo, SMK3 } from '../../assets'

const News = () => {
    return (
        <>
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>News</h2>
                            <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>News</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section id="blog" className="blog">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <article className="entry">
                            <div className="entry-img">
                            <img src={Ningbo} alt="Ningbo" className="img-fluid" />
                            </div>
                            <h2 className="entry-title">
                            <Link to="#">Training Tour for PT. Citra Sanxing Indonesia</Link>
                            </h2>
                                <div className="entry-meta">
                                    <ul>
                                        <li className="d-flex align-items-center"><i className="icofont-user" /> <Link>Ahsan Ta'wil</Link></li>
                                        <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <Link><time dateTime="2019-07-08">July 8, 2019</time></Link></li>
                                    </ul>
                                </div>
                            <div className="entry-content">
                            <p>
                                For the first time, we welcomed colleagues from our overseas base-PT. 
                                Citra Sanxing Indonesia and planed a series of training courses concerning technical support, QC, HR as well as operation management. The training courses were divided into general and specific. The four foreign colleagues firstly received general courses on meter elementary knowledge, corporate culture and operation management. 
                                Then each of them was given specific training according to their work content..
                            </p>
                            <div className="read-more">
                                <a href="http://www.sanxingelectric.com/newsdeta.php?id=6ZmG5aSn54i3ezQ5fXRoaXNfaXNfYV9lbmNyeXB0KiUlJCQsZWxsZC4kP2lkPTk4MC8%3D">Read More</a>
                            </div>
                            </div>
                        </article>
                        </div>
                        <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <article className="entry">
                            <div className="entry-img">
                            <img src={SMK3} alt="Smk3" className="img-fluid" />
                            </div>
                            <h2 className="entry-title">
                            <Link>Training P2K3 SMK3 PT.Citra Sanxing Indonesia </Link>
                            </h2>
                            <div className="entry-meta">
                            <ul>
                                <li className="d-flex align-items-center"><i className="icofont-user" /> <Link>Ahsan Ta'wil</Link></li>
                                <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <Link><time dateTime="2020-01-01">Jan 1, 2020</time></Link></li>
                            </ul>
                            </div>
                            <div className="entry-content">
                            <p>
                                <strong>Occupational health and safety management systems</strong> <br />
                                Currently, Occupational Health and Safety (K3) is a mandatory program for every company. 
                                The demands for K3 implementation, not only at the level of government or government regulations. 
                                Instead, every company is required to be able to implement Occupational Health and Safety in its business and business.
                            </p>
                            <div className="read-more">
                                <Link>Read More</Link>
                            </div>
                            </div>
                        </article>
                        </div>
                        <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <article className="entry">
                            <div className="entry-img">
                            <img src={ISO} alt="iso" className="img-fluid" />
                            </div>
                            <h2 className="entry-title">
                            <Link>Training Awareness ISO 9001:2015</Link>
                            </h2>
                            <div className="entry-meta">
                            <ul>
                                <li className="d-flex align-items-center"><i className="icofont-user" /> <Link>Ahsan Tawil</Link></li>
                                <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <Link><time dateTime="2020-01-01">Jan 1, 2020</time></Link></li>
                            </ul>
                            </div>
                            <div className="entry-content">
                            <p>
                                <strong>PT Citra Sanxing Indonesia</strong> <br />
                                As we know, in September 2015 the latest version of ISO 9001 was published which we know as ISO 9001: 2015. 
                                There are some quite basic changes, namely the introduction of "risk based thinking" in this latest version. 
                                As we know, ISO 9001 evolved from 1988 to 2015, from document based, process based to the newest version of risk based thinking.
                                Philosophically, risk-based thinking means that the two new ISO standards focus more on "business sustainability" than on operations management. 
                                However, if these changes are not made on the basis of correct understanding, the previous version of the "style" management system will carry over and in the end the benefits to the organization will not be achieved as expected.
                            </p>
                            <div className="read-more">
                                <Link>Read More</Link>
                            </div>
                            </div>
                        </article>{/* End blog entry */}
                        </div>
                        <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                        <article className="entry">
                            <div className="entry-img">
                            <img src={Disjaya1} alt="Modem Disjaya" className="img-fluid" />
                            </div>
                            <h2 className="entry-title">
                            <Link>Sharing Product knowledge Modem 3G CSI21 with PLN DISJAYA and DISBANTEN</Link>
                            </h2>
                            <div className="entry-meta">
                            <ul>
                                <li className="d-flex align-items-center"><i className="icofont-user" /> <Link>Ahsan Tawil</Link></li>
                                <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <Link><time dateTime="2019-08-16">Agustus 16, 2019</time></Link></li>
                            </ul>
                            </div>
                            <div className="entry-content">
                            <p>
                                <strong>PT Citra Sanxing Indonesia</strong> <br />
                                Socialization of 3G Modem with PLN Disjaya and Disbanten, sharing session and question and answer for the new product of Citra Sanxing Indonesia
                            </p>
                            <div className="read-more">
                                <Link>Read More</Link>
                            </div>
                            </div>
                        </article>
                        </div>
                    </div>
                    <div className="blog-pagination" data-aos="fade-up">
                        <ul className="justify-content-center">
                        <li className="disabled"><i className="icofont-rounded-left" /></li>
                        <li><Link>1</Link></li>
                        <li className="active"><Link>2</Link></li>
                        <li><Link>3</Link></li>
                        <li><Link><i className="icofont-rounded-right" /></Link></li>
                        </ul>
                    </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default News
