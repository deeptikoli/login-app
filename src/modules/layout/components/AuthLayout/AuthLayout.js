import Header from '../../pages/header/header';
import Login from '../../../../modules/login/login';
import React, { Suspense, lazy, Route, Redirect } from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from '../../../../shared/components/protectedRoute';
import { connect } from "react-redux";
const Dashboard = lazy(() => import('../../../dashboard/dashboard'));

const AuthLayout = (props) => {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Dashboard />
                </Switch>
            </Suspense>
        </>
    )
}

export default AuthLayout;
