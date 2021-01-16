import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSI01, CSI11, CSI21, CSI21S, CSI32, Sanplat } from '../../components/productItem';
import { MainApp } from '../../pages';


const Routes = () => {
    return (
        <Router>
            <Switch>
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
