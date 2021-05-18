// ** create-user.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFile extends Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        var session_url = 'http://localhost:8083/listFiles';
        var uname = 'wovendb';
        var pass = 'cC5sNH1nDc^H';
        var response = axios.get(session_url, {
            auth: {
                username: uname,
                password: pass
            },
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:8083',
            },
            withCredentials: true,
            crossdomain: true,
            mode: 'no-cors',
        }).then(function(response) {
            console.log('Authenticated');
        }).catch(function(error) {
            console.log('Error on Authentication');
        });

        console.log(response.data)
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add File Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Data Type</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}
