import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Layout } from "../containers/";

import {
  Home,
  Login,
  PasswordRecovery,
  SendEmail,
  NewPassword,
  MyAccount,
  CreateAccount,
  Checkout,
  Orders,
  NotFound,
} from "../pages";

import { AppContextProvider } from "../context/AppContext";
import "@styles/styles.scss";
const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/password-recovery"
              component={PasswordRecovery}
            />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
