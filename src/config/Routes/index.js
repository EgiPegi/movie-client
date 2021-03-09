import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Compare, Main } from '../../pages'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path = "/compare">
                <Compare />
            </Route>
            <Route path = "/">
                <Main />
            </Route>
        </Switch>

            
        </BrowserRouter>
    )
}

export default Routes