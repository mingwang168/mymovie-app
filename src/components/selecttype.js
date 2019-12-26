import React from 'react';


const selections=['popular','top_rated','upcoming','now_playing'];
const makeTypeOptions=(selections)=>{
return selections.map((selection,i)=>(<option key={i}>{selection}</option>)
);
}

const SelectType = (props) => {
    const handleChange=(e)=>{
        e.preventDefault();
        let selection=e.target.value;
        props.handleChangType(selection);
    }
    return (
        <span className="typebox">
        <label className="optionlabel"> Options:</label>
        <select className="optionselect" name="theSelection" id="selection" onChange={handleChange}>
            {makeTypeOptions(selections)}
        </select>
        </span>
    );
}
export default SelectType;