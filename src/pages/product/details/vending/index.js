import React, { Component } from 'react';
import { Vending1, Vending3, Vending } from '../../../../assets';

export default class vending extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="portfolio-details" className="portfolio-details">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="portfolio-title">Sanplat Vending System</h2>
                                <div className="owl-carousel portfolio-details-carousel">
                                    <img src={Vending1} className="img-fluid" alt="Vending System" />
                                    <img src={Vending3} className="img-fluid" alt="Vending System" />
                                    <img src={Vending} className="img-fluid" alt="Vending System" />
                                </div>
                            </div>
                            <div className="col-lg-4 portfolio-info">
                            <h3>Feature information</h3>
                            <ul>
                                <li>Desain Web </li>
                                <li>Can use Indonesian and English</li>
                                <li>Programmable prices and tariff settings</li>
                                <li>Event and transaction history</li>
                                <li>Supports online and offline transactions</li>
                                <li>Transaction billing history</li>
                                <li>Multifunction POS</li>
                                <li>Support API for Microservice Architecture</li>
                                <li><strong>Trial URL</strong>: <a href="http://139.5.149.98:8080" target="__blank">Sanplat Vending</a></li>
                            </ul>
                            <p>
                                SanPlat prepayment is a solution in dealing with problems in billing systems with the latest technology.
                            </p>
                            <ul>
                                <li>
                                Anti-tampering &amp; Anti-
                                manipulation
                                </li>
                                <li>Improve cash flow </li>
                                <li>
                                Can reduce labor costs.
                                </li>
                                <li>
                                Can reduce management and administrative costs
                                </li>
                                <li>Increase efficiency in terms of energy consumption.</li>
                                <li>Can analyze and suppress network loses</li>
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
