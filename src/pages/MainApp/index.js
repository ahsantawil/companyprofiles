import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Brosur, Home, News, Product } from '..'
import { Footers, Headers } from '../../components'
import { Factory, Honor, Profile, Videos } from '../about'
import { Contact } from '../services'

const MainApp = () => {
    return (
        <div>
            <Router>
                <Headers />
                <Switch>
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
