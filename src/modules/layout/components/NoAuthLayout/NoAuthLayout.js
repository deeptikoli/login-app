import { Switch, Route } from "react-router-dom";
import Login from '../../../login/login';

const NoAuthLayout = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
            </Switch> 
        </>
    )
}

export default NoAuthLayout;