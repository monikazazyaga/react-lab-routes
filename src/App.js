import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // Importing from react-router
import { NavLink } from 'react-router-dom'; 

import Home from './components/Home';
import DataFetchComponent from './components/DataFetchComponent';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  const [userId, setUserId] = useState(null);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/" exact render={(props) => <Home {...props} setUserId={setUserId} />} />
          <Route path="/data-fetch" render={(props) => <DataFetchComponent {...props} userId={userId} />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;