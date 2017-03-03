import React from "react";
import Dropdown from '../components/Dropdown';

import { updateFirstReactantState } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.firstReactant.state,
    values: state.states
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(updateFirstReactantState(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
