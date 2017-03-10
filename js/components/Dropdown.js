import React from 'react';

const Dropdown = (props) => {
  let dropdownValues = [];
  if(!props.disabled) {
    dropdownValues = props.values.map((value) => {
      return <a key={value} onClick={props.onSelected.bind(props, value)}>{value}</a>;
    });
  }

  return (
    <div className="dropdown">
      <button className="dropbtn">{props.selectedValue}</button>
      <div className="dropdown-content">
        {dropdownValues}
      </div>
    </div>
  );
};

export default Dropdown;
