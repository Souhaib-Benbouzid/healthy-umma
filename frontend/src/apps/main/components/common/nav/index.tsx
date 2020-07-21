import React from "react";
import { connect } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";

export const nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/howto">How To</Link>
        </li>
        <li>
          <Link to="/specialists">Specialists</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signIn">Sign In</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(nav);
