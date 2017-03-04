export const firstReactantTypeUpdated = (value) => {
  return {
    type: "FIRST_REACTANT_TYPE_UPDATED",
    payload: { type: value }
  }
}

export const firstReactantStateUpdated = (value) => {
  return {
    type: "FIRST_REACTANT_STATE_UPDATED",
    payload: { state: value }
  }
}

export const secondReactantTypeUpdated = (value) => {
  return {
    type: "SECOND_REACTANT_TYPE_UPDATED",
    payload: { type: value }
  }
}

export const secondReactantStateUpdated = (value) => {
  return {
    type: "SECOND_REACTANT_STATE_UPDATED",
    payload: { state: value }
  }
}

export const firstProductStateUpdated = (value) => {
  return {
    type: "FIRST_PRODUCT_STATE_UPDATED",
    payload: { state: value }
  }
}

export const secondProductStateUpdated = (value) => {
  return {
    type: "SECOND_PRODUCT_STATE_UPDATED",
    payload: { state: value }
  }
}

export const bondedBeforeUpdated = (value) => {
  return {
    type: "BONDED_BEFORE_UPDATED",
    payload: { value: value }
  }
}

export const bondedAfterUpdated = (value) => {
  return {
    type: "BONDED_AFTER_UPDATED",
    payload: { value: value }
  }
}

export const reactionSubmitted = () => {
  return {
    type: "REACTION_SUBMITTED"
  }
}
