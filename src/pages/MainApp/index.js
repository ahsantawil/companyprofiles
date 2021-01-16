import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Brosur, Home, News, Product } from '..'
import { Footers, Headers } from '../../components'
import { CSI01, CSI11, CSI21, CSI21S, CSI32, Sanplat } from '../../components/productItem'
import { Factory, Honor, Profile, Videos } from '../about'
import { Contact } from '../services'

const MainApp = () => {
    return (
        <div>
            <Router>
                <Headers />
                <Switch>
                        <Route path="/csi11">
                            <CSI11 />
                        </Route>
                        <Route path="/csi01">
                            <CSI01 />
                        </Route>
                        <Route path="/csi21">
                            <CSI21 />
                        </Route>
                        <Route path="/csi21s">
                            <CSI21S />
                        </Route>
                        <Route path="/csi32">
                            <CSI32 />
                        </Route>
                        <Route path="/sanplat">
                            <Sanplat />
                        </Route>
                        <Route path="/brosur">
                            <Brosur />
                        </Route>
                        <Route path="/product">
                            <Product />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/videos">
                            <Videos />
                        </Route>
                        <Route path="/honor">
                            <Honor />
                        </Route>
                        <Route path="/factory" >
                            <Factory />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                <Footers />
            </Router>
        </div>
    )
}

export default MainApp
