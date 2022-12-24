import React from "react";

function Header() {
    return (
        <header className="continer-fluid ">
            <div className="header-top">
                <div className="container">
                    <div className="row col-det">
                        <div className="col-lg-6 d-none d-lg-block">
                            <ul className="ulleft">
                                <li>
                                    <i className="far fa-envelope"></i>
                                    sales@smarteyeapps.com
                                    <span>|</span></li>
                                <li>
                                    <i className="far fa-clock"></i>
                                    Service Time : 12:AM
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu-jk" className="header-bottom">
                <div className="container">
                    <div className="row nav-row">
                        <div className="col-md-3 logo">
                            <img src="assets/images/logo.jpg" alt="" />
                        </div>
                        <div className="col-md-9 nav-col">
                            <nav className="navbar navbar-expand-lg navbar-light">

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#home">Home </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#about">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#donate">Donate Now </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#gallery">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#faq">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact">Contact US</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;