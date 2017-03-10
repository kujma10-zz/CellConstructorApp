import React from "react";
import R from 'ramda';

const Reaction = (props) => {
  const reaction = props.reaction;
  let firstReactant = R.concat(reaction.firstReactant.type, reaction.firstReactant.state);
  let secondReactant = R.concat(reaction.secondReactant.type, reaction.secondReactant.state);
  let firstProduct = R.concat(reaction.firstProduct.type, reaction.firstProduct.state);
  let secondProduct = R.concat(reaction.secondProduct.type, reaction.secondProduct.state);
  let leftSide = reaction.bondedBefore ? R.concat(firstReactant, secondReactant) : R.concat(firstReactant + ' + ', secondReactant);
  let rightSide = reaction.bondedAfter ? R.concat(firstProduct, secondProduct) : R.concat(firstProduct + ' + ', secondProduct);
  const reactionInStr = R.concat(leftSide + ' => ', rightSide);

  return (
    <li>{reactionInStr}</li>
  );
};

export default Reaction;
