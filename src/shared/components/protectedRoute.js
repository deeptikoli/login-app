import react from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute (
    {
        Component,
        // logout,
        isAuthenticated,
        // currentUser
    }
) {
    let history = useHistory();
    return (
        // <h1>Dashboard</h1>
        <Route
            render = {(props) => {
                console.log(isAuthenticated)
                return isAuthenticated ?  <Component /> : history.push('/')
            }}
        />    
    )
}

function mapStateToProps(state) {
    console.log(state) 
    return {
        isAuthenticated: state.isUserAuthenticated,
        // users: state.users,
        // currentUser: state.user
    };
}

const mapDispatchToProp = (dispatch) => {
    return {
        logout: () => {dispatch({type:'LOGOUT'}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(ProtectedRoute);