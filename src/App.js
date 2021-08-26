import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { useSelector, connect } from "react-redux";

import CustomToastComponent from "./components/toast/custom-toast";

import "./App.css";
import { change_lang_action } from "./redux/actions/lang_action";
import { setLanguage } from "react-multi-lang";

const Home = lazy(() => import("./pages/home"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));
const Register = lazy(() => import("./pages/register"));

function App(props) {
  const state = useSelector((state) => state);

  useEffect(() => {
    props.change_lang(state.lang);
    setLanguage(state.lang);
  }, [props, state.lang]);

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
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    change_lang: (input) => {
      dispatch(change_lang_action(input));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);

const MyCustomToast = (props) => {
  return <CustomToastComponent {...props}></CustomToastComponent>;
};

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const user = get_user();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user?.id ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// };
