


function filterMV(arr){
         return(
            arr.reduce((result,item,i)=>{
            if(i<=11){
                result.push({id:item.id, poster: item.poster_path, title: item.title, releaseDate: item.release_date,rating: item.vote_average, summary: item.overview});
            }

           // console.log(result);
            return result;
        },[])
    )
}

function movieMaker(movieAPI){
    movieAPI=filterMV(movieAPI);

return movieAPI;
}

export default movieMaker;