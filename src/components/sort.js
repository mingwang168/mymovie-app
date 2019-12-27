import React, { useState } from 'react';


const Sort = (props) => {
    const handlesortlist = () => {
        /* let sortlist = ['vote_average.asc', 'vote_average.desc', 'release_date.asc', 'release_date.desc', 'original_title.asc', 'original_title.desc']; */
        let sortlist = ['Rating: Low -> Hight', 'Rating: Hight -> Low', 'Release: Early -> Late', 'Release: Late -> Early', 'Title: A -> Z', 'Title: Z -> A'];
        const sortitems = sortlist.map((item, i) => <option key={i} type="radio" aria-label="Radio button for following text input" >{item}</option>)
        return sortitems;
    }

    const handleChange = (e) => {
        e.preventDefault();
        let sortname= e.target.value;
        let sort
        if(sortname==="Rating: Low -> Hight"){
            sort="vote_average.asc"
        }else if(sortname==="Rating: Hight -> Low"){
             sort="vote_average.desc"
        }else if(sortname==="Release: Early -> Late"){
             sort="primary_release_date.asc"
        }else if(sortname==="Release: Late -> Early"){
             sort="primary_release_date.desc"
        }else if(sortname==="Title: A -> Z"){
            sort="original_title.asc"
        }else if(sortname==="Title: Z -> A"){
            sort="original_title.desc"
        }
        props.handleChangSort(sort);
    }

    return (
        <span className="m-2">
            <label className="font-weight-bold sortlabel">Sort by : </label>
            <select className="sortlist" onChange={handleChange}>
                {handlesortlist()}
            </select>
        </span>
    );
}
export default Sort;