import Dropdown from '../components/Dropdown';

import {firstProductStateUpdated} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.firstProduct.state,
    values: state.states,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(firstProductStateUpdated(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
