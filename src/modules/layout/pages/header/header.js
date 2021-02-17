import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from '../../../../core/store/actions/actions'
import PropTypes from 'prop-types';

function Header(props) {

    let history = useHistory();

    const handlClick = () => {
        props.logoutUser();
        history.push('/');
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand disabled" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link disabled" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Link</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <p className='mr-5 mb-0'>Welcome {props.currentUser.email}</p> 

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 disabled" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success disabled my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

            <button className="btn btn-outline-success ml-2 my-sm-0" onClick={handlClick}>Logout</button>
        </nav>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.user
    };
}

const mapDispatchToProp = (dispatch) => {
    return {
        logoutUser:() => logoutAction(dispatch),
    }
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProp)(Header);