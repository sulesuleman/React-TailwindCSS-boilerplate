import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import CustomLayout from 'Layout';
import { Login, AdminLogin } from 'pages/Auth';
import { Home } from 'pages/Dashboard';
import { useAuthContext } from 'context';


function App() {

  const { authorized } = useAuthContext();

  return (
    <>
      <CustomLayout>
        {
          authorized ?
            <Switch>
              <Route path='/home' component={Home} />
              <Redirect to="/home" />
            </Switch>
            :
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/admin/login" component={AdminLogin} />
              <Redirect from="/" to="/login" />
              <Redirect to="/login" />
            </Switch>
        }
      </CustomLayout>
    </>
  )
}

export default App;
