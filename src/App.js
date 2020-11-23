import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Contact from './contact.js';
import {BrowserRouter as Router,Route,Switch,useHistory,Link} from 'react-router-dom';
import React,{useEffect} from 'react';
import Login from './login.js';
import Analytics from './analytics.js';



function App() {

  return(
    <div className="App">
    <header className="header">
    Full Stack Assingment
    </header>

     <Router>    
      <div className="container">   
       <Switch>    
 <Route exact path='/' component={Login} ></Route>    
  <Route path='/contact' component={Contact}  ></Route> 
  <Route path='/contact' component={Contact}></Route>
  <Route path='/analytic' component={ Analytics}></Route>    
  </Switch>    
      </div>    

    </Router>
    </div> 

    
  
  );
}

export default App;
