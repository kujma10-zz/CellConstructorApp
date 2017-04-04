import React from 'react';
import FirstReactantTypeContainer from '../containers/FirstReactantTypeContainer';
import FirstReactantStateContainer from '../containers/FirstReactantStateContainer';
import SecondReactantTypeContainer from '../containers/SecondReactantTypeContainer';
import SecondReactantStateContainer from '../containers/SecondReactantStateContainer';
import FirstProductTypeContainer from '../containers/FirstProductTypeContainer';
import FirstProductStateContainer from '../containers/FirstProductStateContainer';
import SecondProductTypeContainer from '../containers/SecondProductTypeContainer';
import SecondProductStateContainer from '../containers/SecondProductStateContainer';

const ReactionEditor = (props) => {
  const onBondedBeforeChanged = (event) => props.onBondedBeforeChanged(event.target.checked);
  const onBondedAfterChanged = (event) => props.onBondedAfterChanged(event.target.checked);

  const beforePlusSpan = props.bondedBefore ? <span></span> : <span> + </span>;
  const afterPlusSpan = props.bondedAfter ? <span></span> : <span> + </span>;

  return (
    <div className="reaction-editor">
      <input type="checkbox" checked={props.bondedBefore} onChange={onBondedBeforeChanged} value="left-bond"/> Bonded before<br/>
      <input type="checkbox" checked={props.bondedAfter} onChange={onBondedAfterChanged} value="right-bond"/> Bonded after<br/>
      <FirstReactantTypeContainer />
      <FirstReactantStateContainer />
      {beforePlusSpan}
      <SecondReactantTypeContainer />
      <SecondReactantStateContainer />
      <span> => </span>
      <FirstProductTypeContainer />
      <FirstProductStateContainer />
      {afterPlusSpan}
      <SecondProductTypeContainer />
      <SecondProductStateContainer />
      <input id="submit" type="submit" value="Submit" onClick={props.onSubmitted.bind(props)}/>
    </div>
  );
};

export default ReactionEditor;
