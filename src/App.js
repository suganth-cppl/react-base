import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import CustomToastComponent from "./components/toast/custom-toast";
import NotFound from "./pages/not-found";
import { get_user } from "./auth/auth";
const Home = lazy(() => import("./pages/home"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));

function App() {
  return (
    <>
      <div className="top-loader">Loading...</div>
      <div className="whole-content">
        <ToastProvider
          placement="bottom-right"
          components={{ Toast: MyCustomToast }}
          autoDismissTimeout={1800}
        >
          <Router>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route exact path="/" component={Home} />
                <Route path="/not-found" component={NotFound} />
                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </ToastProvider>
      </div>
    </>
  );
}

export default App;

const MyCustomToast = (props) => {
  return <CustomToastComponent {...props}></CustomToastComponent>;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const user = get_user();

  return (
    <Route
      {...rest}
      render={(props) =>
        user?.id ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};
