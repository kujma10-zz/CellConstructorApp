import React from 'react';
import Reaction from './Reaction'

const ReactionList = (props) => {
  const reactions = props.reactionList.map((reaction, index) => {
    return <Reaction key={index} reaction={reaction} />
  });

  return (
    <ul>
      {reactions}
    </ul>
  );
};

export default ReactionList;
