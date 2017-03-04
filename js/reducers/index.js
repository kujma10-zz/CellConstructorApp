import R from 'ramda'

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const initialState = {
  types: ['A', 'B', 'C', 'D', 'E', 'X', 'Y'],
  states: range(0, 10),
  currentReaction: {
    bondedBefore: false,
    bondedAfter: true,
    firstReactant: {
      type: 'A',
      state: 0
    },
    secondReactant: {
      type: 'B',
      state: 0
    },
    firstProduct: {
      type: 'A',
      state: 0
    },
    secondProduct: {
      type: 'B',
      state: 0
    }
  },
  reactionList: []
}

const reactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIRST_REACTANT_TYPE_UPDATED':
      return R.compose(
        R.assocPath(['currentReaction', 'firstReactant', 'type'], action.payload.type),
        R.assocPath(['currentReaction', 'firstProduct', 'type'], action.payload.type)
      )(state);;
    case 'FIRST_REACTANT_STATE_UPDATED':
      return R.assocPath(['currentReaction', 'firstReactant', 'state'], action.payload.state, state);
    case 'SECOND_REACTANT_TYPE_UPDATED':
      return R.compose(
        R.assocPath(['currentReaction', 'secondReactant', 'type'], action.payload.type),
        R.assocPath(['currentReaction', 'secondProduct', 'type'], action.payload.type)
      )(state);;
    case 'SECOND_REACTANT_STATE_UPDATED':
      return R.assocPath(['currentReaction', 'secondReactant', 'state'], action.payload.state, state);
    case 'FIRST_PRODUCT_STATE_UPDATED':
      return R.assocPath(['currentReaction', 'firstProduct', 'state'], action.payload.state, state);
    case 'SECOND_PRODUCT_STATE_UPDATED':
      return R.assocPath(['currentReaction', 'secondProduct', 'state'], action.payload.state, state);
    case 'BONDED_BEFORE_UPDATED':
      return R.assocPath(['currentReaction', 'bondedBefore'], action.payload.value, state);
    case 'BONDED_AFTER_UPDATED':
      return R.assocPath(['currentReaction', 'bondedAfter'], action.payload.value, state);
    case 'REACTION_SUBMITTED':
      return R.assoc('reactionList', R.append(state.currentReaction, state.reactionList), state);
    default:
      return state;
  }
}

export default reactionsReducer;

