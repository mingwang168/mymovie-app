import React, {useState} from 'react';

const Year = (props) => {

    const handleChange=(e)=>{
        e.preventDefault();
        let year=e.target.value;
        props.handleChangYear(year);       
    }
    return (
        <span>
        <label className="font-weight-bold yearlabel">Year of :</label>
        <input onChange={handleChange} type='number' className="yearinput" defaultValue={props.currentYear} min='1920' max={props.currentYear} required></input>
        </span>
    );
}
export default Year;