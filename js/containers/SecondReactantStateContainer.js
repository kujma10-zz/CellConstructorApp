import React from "react";
import Dropdown from '../components/Dropdown';

import { updateSecondReactantState } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.secondReactant.state,
    values: state.states
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(updateSecondReactantState(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
