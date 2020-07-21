import React from "react";
import { connect } from "react-redux";
import Entry from "./main/";

export const App = () => {
  return (
    <div>
      <Entry />
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
