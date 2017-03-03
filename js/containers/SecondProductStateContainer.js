import React from "react";
import Dropdown from '../components/Dropdown';

import { updateSecondProductState } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.secondProduct.state,
    values: state.states
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(updateSecondProductState(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
