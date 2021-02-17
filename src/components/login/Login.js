import react, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { validateUserAction } from '../../core/store/actions/actions';

function Login(props) {
    
    let history = useHistory();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState(false);

    function handleChange(event) {
        const {id , value} = event.target   
        if(id === 'email') {
            setEmail(value)    
        } else if (id === 'password') {
            setPassword(value)
        }  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.users)
        const user = props.users && props.users.find(element => element.email === email && element.password === password);
        console.log(user)
        if (user){
            setEmail(user.email)
            props.validateUser(user);
            history.push({
                pathname:'/dashboard',
                state:user
            })
        } else {
            setError(true);
        } 
    }

    if (props.currentUser && props.currentUser.isUserAuthenticated) {
        return <Redirect to={{ pathname: "/dashboard"}} />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin mt-5">
                        <div className="card-body">
                            <div className="Login">
                                <form >
                                    <h3 className="card-title text-center">Login</h3>
                                    {error && <p className='error'>Invalid user</p>}
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="email" id = "email" className="form-control"
                                            onChange={handleChange}
                                            placeholder="Enter email" />
                                    </div>
                    
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control"
                                            id = "password"
                                            onChange={handleChange} 
                                            placeholder="Enter password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state) 
    return {
        users: state.users,
        currentUser: state
    };
}

const mapDispatchToProp = (dispatch) => {
    return {
        validateUser:(user) => validateUserAction(dispatch, user)
    }
        
}

export default connect(mapStateToProps, mapDispatchToProp)(Login);