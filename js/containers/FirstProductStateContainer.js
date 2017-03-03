import React from "react";
import Dropdown from '../components/Dropdown';

import { updateFirstProductState } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.firstProduct.state,
    values: state.states
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(updateFirstProductState(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
