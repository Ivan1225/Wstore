import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">
                        © 2019 Wstore, Inc. All rights reserved
                    </span>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                        Policy
                    </button>
                </div>
            </footer>
        );
    }
}

export default Footer;

//&#169; {new Data().getFullYear()}