import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
//@view
import HomePage from '../view/HomePage';
import Blog from '../view/Blog'
import BlogSingle from '../view/BlogSingle'

const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'><HomePage /></Route>{/* 首頁 */}
                    <Route exact path='/blog'><Blog /></Route>{/* 保險懶人包 */}
                    <Route exact path='/blog/:id/:id'><BlogSingle /></Route>{/* 保險懶人包 */}
                </Switch>
            </Router>
        </>
    )
}
export default AppRouter
