import React, { useState, useEffect } from 'react';
import movieMake from './moviemaker';

const Search = (props) => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchSearch = async () => {
            if (search != '') {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a7913b39e5e5965bc0611cad50321e2a&language=${props.lang}&query=${search}&page=1`);
                let data = await res.json();
           //    props.setShowdetail(false);
                props.setMovieData(movieMake(data.results));
                
            }
        }
        fetchSearch();
    }, [search,props.lang])

    const handleSearchBox=(e)=>{
        e.preventDefault();
        let searching=e.target.elements.searching.value;
        setSearch(searching);
    }
    return (
        <form className="searchbox"onSubmit={handleSearchBox}>
            <input className="searchinput" name="searching" placeholder='movie name'></input>
            <button className="btn btn-info">Search</button>
            <h5>Search > {search}</h5>
        </form>


    );
}
export default Search;