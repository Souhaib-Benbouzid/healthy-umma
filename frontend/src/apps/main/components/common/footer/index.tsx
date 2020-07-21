import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

export const footer = () => {
  return <div>footer</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(footer);
