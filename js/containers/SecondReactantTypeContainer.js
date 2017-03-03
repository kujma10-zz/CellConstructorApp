import React from "react";
import Dropdown from '../components/Dropdown';

import { updateSecondReactantType } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.secondReactant.type,
    values: state.types
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(updateSecondReactantType(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
