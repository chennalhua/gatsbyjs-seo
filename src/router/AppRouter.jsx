import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
//@view
import HomePage from '../view/HomePage';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'><HomePage /></Route>{/* 首頁 */}
                </Switch>
            </Router>
        </>
    )
}
export default AppRouter
