import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory, Redirect } from "react-router-dom"
import { Auth } from "./pages/Auth"
import API from './adapters/API';
// import paths from './paths'

function App() {
  const [user, setUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
    API.validate()
    .then((resp:any) => {
      setUser(resp.user.username)
      history.push('/')
    })
    .catch(() => {
      history.push('/auth/login')
    })
  }, [])

  const logout:any = () => {
    API.logout();
    setUser(null);
    history.push('/auth/login');
  };

  return (
    <div className="App">
      {user && <button onClick={logout}>log out</button>}
      <Route path="/auth">
        <Auth setUser={setUser}/>
      </Route>
      {
        user ? (
          <>
            <Route path="/">
              <h1>User logged in</h1>
            </Route>
          </>
          ) : (
            <Redirect to={'/auth/login'} />
          )
      }
    </div>
  );
}

export default App;