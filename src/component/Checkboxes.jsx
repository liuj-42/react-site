import React, { useState } from "react";

import "./Checkboxes.css"

function Checkboxes({setSelected}) {
  const [checked, setChecked] = useState(["Web", "Other"]);
  const checkList = ["Web", "Other"];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setSelected(updatedList);
  };


  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="checkList">
      <h2>Filter</h2>
      <div className="list-container">
        {checkList.map((item, index) => (
          <div key={index}>
            <input id={item} value={item} type="checkbox" onChange={handleCheck} defaultChecked/>
            <label for={item} className={isChecked(item)}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checkboxes;
