import React, { useState, useEffect } from 'react';


//console.log(genrelistarr);

/* const handlegenrelist=(arr)=>{
    const genrelist= arr.map((item,i) =><span><input key={i} type="checkbox" />{item}</span>);
    return genrelist;
} */
//console.log(makegenrelist);
let genreArr = [];

const Genre = (props) => {


    const fetchgenrelist = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=a7913b39e5e5965bc0611cad50321e2a&language=en_us`);
        let genrelist = await res.json();
        genrelist = genrelist.genres;
        let ga = filterGN(genrelist);

    }
    fetchgenrelist();

    function filterGN(arr) {
        return (
            arr.reduce((result, item, i) => {
                result.push(item.name);
                return result;
            }, [])
        )
    }

    const genrelist = [{ id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 28, name: "Action" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },]

    //  console.log(genrelist[0].name)

    const handleChange = (e) => {
        //  e.preventDefault();
        let checked = e.target.checked;
        console.log(checked);
        if (checked === true) {
            genreArr.push(e.target.value);
        } else if (checked === false) {
            for (var i = 0; i < genreArr.length; i++) {
                if (genreArr[i] === e.target.value) {
                    genreArr.splice(i, 1);
                }
            }
        }
        props.handleChangGenre(genreArr);
    }


    const handleGenreList = (arr) => {
        return arr.map((item, i) => <span className="genrelist"><input onClick={handleChange} key={i} type="checkbox" value={item.id} /> {item.name}</span>);
    }


    return (
        <div>
            <label className="genrelabel">Genre : </label>
            <div className="genrebox">
                {handleGenreList(genrelist)}
            </div>
        </div>
    );
}
export default Genre;