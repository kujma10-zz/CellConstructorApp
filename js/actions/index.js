export const updateFirstReactantType = (value) => {
  return {
    type: "UPDATE_FIRST_REACTANT_TYPE",
    payload: { type: value }
  }
}

export const updateFirstReactantState = (value) => {
  return {
    type: "UPDATE_FIRST_REACTANT_STATE",
    payload: { state: value }
  }
}

export const updateSecondReactantType = (value) => {
  return {
    type: "UPDATE_SECOND_REACTANT_TYPE",
    payload: { type: value }
  }
}

export const updateSecondReactantState = (value) => {
  return {
    type: "UPDATE_SECOND_REACTANT_STATE",
    payload: { state: value }
  }
}

export const updateFirstProductState = (value) => {
  return {
    type: "UPDATE_FIRST_PRODUCT_STATE",
    payload: { state: value }
  }
}

export const updateSecondProductState = (value) => {
  return {
    type: "UPDATE_SECOND_PRODUCT_STATE",
    payload: { state: value }
  }
}

