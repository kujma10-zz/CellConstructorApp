import Dropdown from '../components/Dropdown';

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedValue: state.currentReaction.secondProduct.type,
    disabled: true,
  };
};

export default connect(mapStateToProps)(Dropdown);
