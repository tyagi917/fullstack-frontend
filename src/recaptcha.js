import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import logo from './logo.svg';
import './App.css';

class ExampleComponent extends Component {
  constructor(props) {
    super(props)

   // this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }



  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    return (
      <div className="App">
      <div className="captcha">

          <Recaptcha
            sitekey="6LfNj-cZAAAAAFDA-jR9XfS6BBqf3kX6sBTApBjd"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
          </div>
        </div>
      
    );
  }
}

export default ExampleComponent;