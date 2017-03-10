import ReactionList from '../components/ReactionList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    reactionList: state.reactionList,
  };
};

export default connect(mapStateToProps)(ReactionList);
