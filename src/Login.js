import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    render(){
        return(
            <div>
                {/* <a href={process.env.REACT_APP_LOGIN}> */}
                <Link to='/home'><button type="" className="loginButton">
                Sign in
                </button></Link>
          {/* </a> */}
          </div>
        )
    }
}