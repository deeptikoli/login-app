import { useDispatch } from 'react-redux';
import Constants from '../../constants/constants';

export function validateUserAction(dispatch, user) {
    return dispatch({type:Constants.VALIDATE_USER, payload: user} )
}

export function logoutAction(dispatch, user) {
    return dispatch({type:'LOGOUT'} )
}
