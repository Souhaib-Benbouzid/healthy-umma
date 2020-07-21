import React from "react";
import { connect } from "react-redux";
import { addSpecialist } from "../../../../redux/actions";
import "./styles.scss";

export const specialists = () => {
  return <div></div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  addSpecialist,
};

export default connect(mapStateToProps, mapDispatchToProps)(specialists);
