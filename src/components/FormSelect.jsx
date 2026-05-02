import React from "react";

const FormSelect = ({ name, label, list, defaultValue, size }) => {
    
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <select name={name} defaultValue={defaultValue} className={`select ${size}`}>
        {list.map((items) =>{
            
            return <option key={items} value={items}>{items}</option>
        })}
      </select>
    </fieldset>
  );
};

export default FormSelect;
