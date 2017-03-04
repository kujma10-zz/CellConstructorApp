import React from "react";
import ReactionEditor from '../components/ReactionEditor';

import { bondedBeforeUpdated, bondedAfterUpdated, reactionSubmitted } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    bondedBefore: state.currentReaction.bondedBefore,
    bondedAfter: state.currentReaction.bondedAfter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBondedBeforeChanged: (value) => dispatch(bondedBeforeUpdated(value)),
    onBondedAfterChanged: (value) => dispatch(bondedAfterUpdated(value)),
    onSubmitted: () => dispatch(reactionSubmitted())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactionEditor);
