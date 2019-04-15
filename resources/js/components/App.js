import React, { Component } from "react";
import ReactDOM from "react-dom";
// @TODO - look into using Switch - what is it used for and could it be useful here?
import { BrowserRouter, Route, Link } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Header from './Header'
// import NewProject from './NewProject'
// import ProjectsList from './ProjectsList'
import SignInPage from './SignInPage'
import reducers from './reducers/main';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// @TODO - clean this up. The second parameter is there for integrating with redux dev tools.
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const LandingPage = () => {
    return <div>Landing Page</div>;
};

const CreateAccountPage = () => {
    return <div>Create Account Page</div>;
};

const DashboardPage = () => {
    return <div>Dashboard Page</div>;
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/signin" component={SignInPage} />
                        <Route
                            path="/account/create"
                            component={CreateAccountPage}
                        />
                        <Route path="/dashboard" component={DashboardPage} />
                    </div>
                </BrowserRouter>
            </Provider>
            // <BrowserRouter>
            //     <div>
            //         <Header />
            //         <Switch>
            //             <Route exact path='/' component={ProjectsList} />
            //             <Route path='/create' component={NewProject} />
            //             <Route path='/:id' component={SingleProject} />
            //         </Switch>
            //     </div>
            // </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
