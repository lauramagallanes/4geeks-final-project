import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

import { LandingPage } from "../component/landing-page.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getProduct(params.id);
  }, []);

  return (
    <div className="vh-auto p-3 " style={{ marginBottom: "100px" }}>
      <div className="jumbotron jumbotron-fluid mb-3 mt-5 text-align-center"></div>
      <div className="container text-center">
        <LandingPage />
      </div>
    </div>
  );
};
