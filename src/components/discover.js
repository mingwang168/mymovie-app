import React, { useState, useEffect } from 'react';
import Year from '../components/year.js';
import Genre from '../components/genre';
import Sort from '../components/sort';
import MovieGrid from './moviegrid';
import movieMaker from './moviemaker';

const Discover = (props) => {
    /*     const [md, setMovieData] = useState(null);
        const [choise, setChoise] = useState(props.choise);
        const [lang, setLang] = useState(props.lang);
    
        useEffect(() => {
            const fetchMovie = async () => {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${choise}?api_key=a7913b39e5e5965bc0611cad50321e2a&language=${lang}&page=1`);
                let data = await res.json();
                setMovieData(movieMaker(data.results));
            }
            fetchMovie();
        }, [choise, lang])
    
        const handleChangeType = (choise) => {
            setChoise(choise);
        }
        const handleChangeLang = (lang) => {
            setLang(lang);
        } */

    var date = new Date;

    var currentYear = date.getFullYear();
    const [md, setMovieData] = useState(null);
    const [year, setYear] = useState(currentYear);
    const [sort, setSort] = useState('vote_average.asc');
    const [genre, setGenre] = useState('');

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a7913b39e5e5965bc0611cad50321e2a&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1&year=${year}&with_genres=${genre}`);
            let data = await res.json();
            setMovieData(movieMaker(data.results));
        }
        fetchMovie();
    }, [year,sort,genre])

    const handleChangYear = (year) => {
        console.log(year);
        setYear(year);
    }
    const handleChangSort = (sort) => {
        console.log(sort);
        setSort(sort);
    }
    const handleChangGenre=(genre)=>{
        console.log(genre);
        let genreString='';
        for(let i=0;i<genre.length;i++){
            genreString=genreString+genre[i]+'%2C'
        }
        console.log(genreString);
        setGenre(genreString);
    }
    return (
        <main>
            <form className="needs-validation">
                <Year year={year} currentYear={currentYear} handleChangYear={handleChangYear} />
                <Sort sort={sort} handleChangSort={handleChangSort} />
                <Genre genre={genre} handleChangGenre={handleChangGenre}/>
            </form>
            <hr />
            <div className='gridwrap'>
            {md && <MovieGrid movies={md} />} 
            </div>
        </main>
    );
}


export default Discover;