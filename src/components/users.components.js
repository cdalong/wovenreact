import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {

        var session_url = 'http://localhost:8083/listFiles/';
        var uname = 'wovendb';
        var pass = 'cC5sNH1nDc^H';
        axios.get(session_url, {}, {
            auth: {
                username: uname,
                password: pass
            }
        }).then(function(response) {
            console.log('Authenticated');
        }).catch(function(error) {
            console.log('Error on Authentication');
        });

    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}