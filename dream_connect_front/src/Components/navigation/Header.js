import React, {Component} from "react";
import Login from "./Login" // Login component
import { HashLink as Link } from 'react-router-hash-link'; // Route to id="top"

export default class Header extends Component {

    render() {
        return (
            <div>
                {/* <!-- Navbar --> */}
                <nav className="w-100 header-border navbar navbar-expand-lg navbar-dark scrolling-navbar">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            {/* <!-- Links --> */}
                            <ul className="nav-right navbar-nav ml-auto smooth-scroll">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/#top" data-offset="90">Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/thehub#top" data-offset="90">The Hub</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/yourhub#top" data-offset="90">Your Hub</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="#soon" data-offset="90">Coming Soon</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="#about" data-offset="90">About Us</Link>
                                </li>
                                {/* <!-- Login --> */ }
                                <Login />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
