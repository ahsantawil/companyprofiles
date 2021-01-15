import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSI11, Sanplat } from '../../components/productItem';
import { MainApp } from '../../pages';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/sanplat">
                    <Sanplat />
                </Route>
                <Route path="/csi11">
                    <CSI11 />
                </Route>
                <Route path="/">
                     <MainApp />
                </Route>
            </Switch>
        </Router>
    )
} 

export default Routes
