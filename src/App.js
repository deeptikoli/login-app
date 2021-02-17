import Login from './modules/login/login';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import './assets/css/App.scss';
import ProtectedRoute from './shared/components/protectedRoute';
import React, { useState, Suspense, lazy } from "react";
import { connect } from "react-redux";
import  AuthLayout  from "./modules/layout/components/AuthLayout/AuthLayout"
import NoAuthLayout from "./modules/layout/components/NoAuthLayout/NoAuthLayout"
const Dashboard = lazy(() => import('./modules/dashboard/dashboard'));

function App(props) {
 

  return (
    <div className="App">
      { props.isAuthenticated ? <AuthLayout /> : <NoAuthLayout />} 
    </div>
  );
}

function mapStateToProps(state) {

  return {
      isAuthenticated: state.isUserAuthenticated,
      
  };
}

const mapDispatchToProp = (dispatch) => {
  return {
      logoutUser: () => {dispatch({type:'LOGOUT'}) }
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(App);
