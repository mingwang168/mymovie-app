import React, { useState, useEffect } from 'react';
import SelectType from '../components/selecttype';
import SelectLang from '../components/selectlang';
import movieMaker from './moviemaker';
import MovieGrid from './moviegrid';
import Search from '../components/search';

const Home = (props) => {
    const [md, setMovieData] = useState(null);
    const [choise, setChoise] = useState(props.choise);
    const [lang, setLang] = useState(props.lang);
    const fetchMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${choise}?api_key=a7913b39e5e5965bc0611cad50321e2a&language=${lang}&page=1`);
        let data = await res.json();
        setMovieData(movieMaker(data.results));
    }
    useEffect(() => {
        fetchMovie();
    }, [choise, lang])

    const handleChangeType = (choise) => {
        setChoise(choise);
    }
    const handleChangeLang = (lang) => {
        setLang(lang);
    }

    return (
        <main>
            <div className="inline">
            <Search lang={lang}  setMovieData={setMovieData}/>
            <div className="optionGroup">
            <SelectType choise={choise} handleChangType={handleChangeType} />
            <SelectLang lang={lang} handleChangeLang={handleChangeLang} />
            </div>
            </div>
            <hr />
            <div className='gridwrap'>
            {md && <MovieGrid movies={md} />}
            </div>
        </main>
    );
}

Home.defaultProps = {
    choise: 'popular',
    lang: 'en_us',
    search: ''
}
export default Home;