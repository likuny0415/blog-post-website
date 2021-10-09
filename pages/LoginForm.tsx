import React from "react";
import UserAPI from "../lib/api/user";

import Router from 'next/router';
import { Alert, AlertTitle } from "@material-ui/core";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = React.useCallback(
    (e) => setEmail(e.target.value),
    []
  );

  const handlePasswordChange = React.useCallback(
    (e) => setPassword(e.target.value),
    []
  );

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const {data, status} = await UserAPI.login(email, password);
          console.log(data.error);
          
          
          if (status != 201) {
              throw new Error("!!!");
          }
        
          if (data?.user) {
              window.localStorage.setItem('user', JSON.stringify(data.user));
              Router.push('/')
          }

      } catch (error) {
          console.log(error);
      }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            
          >
            Sign in
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
