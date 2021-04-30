import { useState, lazy, Suspense } from 'react'
import { Component } from 'react'
import { Helement } from 'react-helmet'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Home from './pages/Home'
import Header from './container/Header/Header';
import Registration from './container/Registration/Registration';
import BestOffer from './pages/BestOffer';
import StatikPage from './pages/StatikPage';
import SearchPages from './pages/SearchPages';

function App() {

  // const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))

  const  [ useSearch  , setSearch] = useState(true)



  return (
    <div className="App">

      <Router>

        <Switch>

          <Route exact path="/" component={Home}/>

          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/Лучщие-предложение" component={BestOffer}/>

          <Route exact path="/home/rec-name" component={StatikPage}/>

          <Route exact path="/search-pages" component={SearchPages} />

        </Switch>
      </Router>


    </div>
  );
}

export default App;
