import React from "react";
import Dropdown from '../components/Dropdown';

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.firstProduct.type,
    disabled: true
  }
};

export default connect(mapStateToProps)(Dropdown);
