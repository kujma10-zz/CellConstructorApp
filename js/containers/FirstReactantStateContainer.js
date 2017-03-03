import React from "react";
import Dropdown from '../components/Dropdown';

import { firstReactantStateUpdated } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.firstReactant.state,
    values: state.states
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(firstReactantStateUpdated(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
