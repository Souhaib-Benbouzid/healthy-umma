import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

export const signIn = () => {
  return <div>test</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(signIn);
