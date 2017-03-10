import React from 'react';
import ReactionEditorContainer from '../containers/ReactionEditorContainer.js';
import ReactionListContainer from '../containers/ReactionListContainer.js';

const AppWrapper = () => {
  return (
    <div className="app">
      <ReactionEditorContainer />
      <ReactionListContainer />
    </div>
  );
};

export default AppWrapper;
