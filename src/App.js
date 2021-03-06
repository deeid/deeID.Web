import React, { Component } from 'react'

// Blockchain Specifics
// Contracts and JSONRPC Library
//import deeIDPortalContract from '../build/contracts/deeIDPortal.json'
//import deeIDContract from '../build/contracts/deeID.json'
import getWeb3 from './utils/getWeb3'

// Router
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

// Import webpages & custom libraries
import Contact from "./components/Contact";
import About from "./components/About";
import CreateUser from "./components/CreateUser";
import Register from "./Register";
import Home from "./Home";
// Responsible for user login
import userInitialisation from './userInitialisation';

// Utilities
//import './App.css'

//import './css/pure-min.css'
//import './css/bootstrap.css'

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends userInitialisation {
  constructor(props) {
    super(props);

    this.state = {
      storageValue: 45,
      account: 0,
      acc: 0,
      web3: null,
      registered: false,
      name: 'n/a',
      surname: 'n/a',
      email: 'n/a',
      owner: 'n/a',
      formName: '',
      formSurname: '',
      formEmail: ''
    };
  }



  userHeader() {
    if (this.userDetails.registered == false) {
      return (
        <Link className="btn btn-outline-primary" to="/Register">Sign up</Link>
      );
    }else {
      return(
        <button type="button" className="btn btn-light">You're signed in!</button>
      );
    }
  }

  render() {
    const userHeaderLogic = this.userHeader();
    return (
      <Router>
      <div className="Container">

      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <Link className="navbar-brand" to="/Home">
        deeID
         {//<img className="d-inline-block align-top header-logo" src={require('./imgs/omnee_logo_blue.png')} width="80"/>
         }
       </Link>
      <h5 className="my-0 mr-md-auto font-weight-normal"></h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link to="/active" className="p-2 text-dark">Solutions</Link>
        <Link to="/About" className="p-2 text-dark">About</Link>
        <Link to="/Contact" className="p-2 text-dark">Contact</Link>
        <Link to="/CreateUser" className="p-2 text-dark">Create Users</Link>
      </nav>
      {userHeaderLogic}
    </div>


        <div className="row justify-content-md-center">
        <div className="col col-md-8">
        <Route
          path='/Contact'
          render={(props) => <Contact {...props} name={this.userDetails.name} />}
        />

        <Route path="/About" component={About} />

        <Route
          path='/Register'
          render={(props) => <Register {...props} />}
        />

        <Route
          path='/Home'
          render={(props) => <Home {...props} />}
        />
        <Route
          path='/CreateUser'
          render={(props) => <CreateUser {...props} web3={this.state.web3} />}
        />
        <hr />
        <footer className="container">
          <p>deeID Web</p>
          <span>{this.userDetails.name} {this.userDetails.surname}</span>
          Your Ethereum public key: {this.userDetails.accountAddress} <br />
          Your deeID address: {this.userDetails.deeIDAddress}
        </footer>



          </div>
          </div>
          </div>
          

      </Router>
    );
  }
}

export default App ;
