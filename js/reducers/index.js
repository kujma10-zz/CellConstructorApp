import R from 'ramda'

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const initialState = {
  types: ['A', 'B', 'C', 'D', 'E', 'X', 'Y'],
  states: range(0, 10),
  currentReaction: {
    bondedBefore: true,
    bondedAfter: false,
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
    case 'UPDATE_FIRST_REACTANT_TYPE':
      return R.assocPath(['currentReaction', 'firstReactant', 'type'], action.payload.type, state);
    default:
      return state;
  }
}

export default reactionsReducer;

