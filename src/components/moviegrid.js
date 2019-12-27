import React from 'react';
import NoPic from '../images/noposter.jpg'
import { Link, Redirect } from 'react-router-dom';

const imagePath = 'https://image.tmdb.org/t/p/w342';

const makeGrid = (arr) => {
    return arr.map((item, i) => {
        const handlePoster = (poster) => {
            if (poster != null) {
                return <img src={`${imagePath}${item.poster}`} className="card-img-top" alt={`${item.title}`} />
            } else {
                return <img src={NoPic} className="card-img-top" alt={`${item.title}`} />
            }
        }

        return (
            <div className="container card-group">
                <hr/>
            <div key={i} className="card" >
                <Link to={{pathname:'/detail',state:item}}><div>{handlePoster(item.poster)}</div> </Link>
                <div className="card-body">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">Release at: {item.releaseDate}</p>
                    <p className="card-text">Rating: {item.rating}</p>
                    <div className="summarytitle">summary: </div>
                    <textarea className="card-text summarytext">{item.summary}</textarea>
                </div>
                <div className="card-footer">
                <Link to={{pathname:'/detail',state:item}} className="gallery-item">
                    <div className="moreinfo">
                        <button>More Info</button>
                    </div>
               </Link>
                </div>
            </div>
            </div>
        );
    });
}

const MovieGrid = (props) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {makeGrid(props.movies)}
        </div>

    );
}



export default MovieGrid;