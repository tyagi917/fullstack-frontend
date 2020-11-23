import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
//import Contact from './contact.js';
import {BrowserRouter,Route,Switch,useHistory,Link} from 'react-router-dom';
import React,{useEffect} from 'react';


function Login() {
  const history=useHistory();
function responseGoogle(res)
{
  console.log(res);
  if(res.profileObj.name)
  {
    history.push('/contact')
  }
  

}

function componentClicked(data)
{
  console.log(data);

} 
function  responseFacebook()
{
  console.log("onSuccess");
  history.push('./contact');
}
  return (
    <div className="App">
      <div class="login">
      <h1>Login</h1>
<GoogleLogin
    clientId="988668161302-dbvocpqmk6d1fo1pnp6q5t27fug3h7pp.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <div  className="button" style={{width:"250px",height:"10px"}}>
    <FacebookLogin
    appId="460008881638750"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
    </div>
    </div>
  
    </div>
  );
}
export default Login;
