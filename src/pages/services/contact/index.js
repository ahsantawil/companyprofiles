import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Contact</h2>
                                    <ol>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            Contact
                                        </li>
                                    </ol>
                            </div>
                        </div>
                    </section>
                    <section id="contact" className="contact">
                        <div className="container">
                            <div>
                                {/* <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5897196075684!2d106.76576631447536!3d-6.185624095521862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70254723eff%3A0x85a851c43dcb29ea!2sPT.%20Citra%20Sanxing!5e0!3m2!1sen!2sid!4v1608096233128!5m2!1sen!2sid" width="100%" height={270} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4">
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-google-map" />
                                            <h4>Location</h4>
                                            <p>Kedoya Elok Plaza Blok DB No. 38 </p>
                                            <p>Jakarta Barat, DKI Jakarta 11520</p>
                                        </div>
                                        <div className="email">
                                            <i className="icofont-envelope" />
                                            <h4>Email</h4>
                                            <p>sales@citrasanxing.com</p>
                                            <p>support@citrasanxing.co.id</p>
                                        </div>
                                        <div className="phone">
                                            <i className="icofont-phone" />
                                            <h4>Call</h4>
                                            <p>(021)29402132</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 mt-5 mt-lg-0">
                                    <form action="#" className="email-form">
                                        <div className="form-row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                                <div className="validate" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required/>
                                                <div className="validate" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} required/>
                                            <div className="validate" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message" />
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
