import React from 'react';
import Dropdown from './Dropdown.js'
import FirstReactantTypeContainer from '../containers/FirstReactantTypeContainer'
import FirstReactantStateContainer from '../containers/FirstReactantStateContainer'
import SecondReactantTypeContainer from '../containers/SecondReactantTypeContainer'
import SecondReactantStateContainer from '../containers/SecondReactantStateContainer'
import FirstProductTypeContainer from '../containers/FirstProductTypeContainer'
import FirstProductStateContainer from '../containers/FirstProductStateContainer'
import SecondProductTypeContainer from '../containers/SecondProductTypeContainer'
import SecondProductStateContainer from '../containers/SecondProductStateContainer'

const ReactionEditor = (props) => {
  return (
    <div className="reaction-editor">
      <input type="checkbox" name="bond" value="left-bond"/> Bonded before<br/>
      <input type="checkbox" name="bond" value="right-bond"/> Bonded after<br/>
      <FirstReactantTypeContainer />
      <FirstReactantStateContainer />
      <span> + </span>
      <SecondReactantTypeContainer />
      <SecondReactantStateContainer />
      <span> => </span>
      <FirstProductTypeContainer />
      <FirstProductStateContainer />
      <SecondProductTypeContainer />
      <SecondProductStateContainer />
      <input type="submit" value="Submit"/>
    </div>
  );
};

export default ReactionEditor;
