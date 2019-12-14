import React from 'react';
import { Route } from "react-router-dom";
import { Login } from './Login'

export type AuthProps = {
  setUser: any
}

export const Auth = ({ setUser }:AuthProps) => {
  return(
    <>
      <Route exact path="/auth/login">
        <Login setUser={setUser}/>
      </Route>
      <Route exact path="/auth/signup">
        <div>Signup</div>
      </Route>
    </>
  )
}