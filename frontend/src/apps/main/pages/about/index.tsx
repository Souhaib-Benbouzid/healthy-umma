import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

export const about = () => {
  return <div>about</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(about);
