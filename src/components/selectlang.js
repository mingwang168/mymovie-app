import React, {useState} from 'react';


const selections=['English','中文'];
const makeTypeOptions=(selections)=>{
return selections.map((selection,i)=>(<option key={i}>{selection}</option>)
);
}

const SelectLang = (props) => {
    const handleChange=(e)=>{
        e.preventDefault();
        let selection=e.target.value;
        if(selection==="English"){
            props.handleChangeLang('en_us');
        }else if (selection==="中文"){
            props.handleChangeLang('zh');
        }
        
    }
    return (
        <span>
        <label className="ml-4 mr-2">Language:</label>
        <select name="theSelection" id="selectLang" onChange={handleChange}>
            {makeTypeOptions(selections)}
        </select>
        </span>
    );
}
export default SelectLang;