import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Dashboard from "./components/dashboard";

import logo from "./logo.png";

class App extends Component {
    render() {
        return (
            <Router>
                <div id="page-container">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>

                        <div className="collpase nav-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">View</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Insert</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route path="/" exact component={TodosList} />
                    <Route path="/dashboard"  component={Dashboard} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />


                </div>
            </Router>


        );
    }
}

export default App;
