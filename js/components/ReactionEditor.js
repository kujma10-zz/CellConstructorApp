import React from 'react';
import Dropdown from './Dropdown.js'
import FirstReactantTypeContainer from '../containers/FirstReactantTypeContainer'

const ReactionEditor = (props) => {
  return (
    <div className="reaction-editor">
      <input type="checkbox" name="bond" value="left-bond"/> Bonded before<br/>
      <input type="checkbox" name="bond" value="right-bond"/> Bonded after<br/>
      <FirstReactantTypeContainer />
      <input type="submit" value="Submit"/>
    </div>
  );
};

export default ReactionEditor;
