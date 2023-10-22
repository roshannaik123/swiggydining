// App.js
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Book from './Book';
import Blog from './Blog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Book" component={Book}/>
          <Route exact path ="/Blog" component={Blog}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
