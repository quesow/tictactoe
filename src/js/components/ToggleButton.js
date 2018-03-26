import React from 'react';
import { connect } from "react-redux";
import { inverse } from "../actions";

const mapStateToProps = state => {
  return { invert: state.invert };
};

const mapDispatchToProps = dispatch => {
  return {
      inverse: () => dispatch(inverse())
  };
};

class ConnectedToggleButton extends React.Component {
  render() {
    const buttonName = this.props.invert ? "ASC" : "DESC"
    return (
      <button className={"btn btn-default btn-block"} onClick={() => this.props.inverse()}>{buttonName}</button>
    );
  }
}

export const ToggleButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedToggleButton);
