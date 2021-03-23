import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import { setAuth } from '../../selectors/selectors';

const GuardedRoute = ({ component: Component, ...rest }: any) => {
    const isAuth = useSelector(setAuth);

    console.log("auth:" + isAuth)
    return (
        <Route {...rest} render={(props) => (
            isAuth === true
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default GuardedRoute;