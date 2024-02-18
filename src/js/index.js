//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/cardSection.style.css";
import "../styles/footer-style.css";
import "../styles/jumbotron-style.css";
import "../styles/navbar-style.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.getElementById("app"));
