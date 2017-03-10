import Dropdown from '../components/Dropdown';

import {secondReactantStateUpdated} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.secondReactant.state,
    values: state.states,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelected: (value) => dispatch(secondReactantStateUpdated(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
