import React, { useEffect, useState } from 'react'
import '../css/Movie.css'

function Movie() {
    const [movieList, setMovieList] = useState([])
    const [search, setSearch] = useState()
    
// IMPORTATION DES DONNERS DES FILMS DEPUIS L'API - TMDB -
    useEffect( () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=ceb50c2809a3dc3e85025e306e2a2cde")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
        .catch(error => console.error("Error fetching movies:", error));
    }, []);

    console.log(movieList);

    const onChange = (movie) => {
        setSearch(movie.target.search)
    }
   // .toLowerCase('')
    const onSearch= (searchTerm) => {
        setSearch(searchTerm);
    }
    
  return (
    <div>
            <form className='recherche' action="">
                <input type="text" 
                placeholder='Recherche ...'
                onChange={(e) => setSearch(e.target.value)}
                value={search} onChanges={onChange}
                />
                <button onClick={()=> onSearch(search)}>Search</button>  
            </form>
                <div className="dropdown">
                    {movieList.filter(movie => {
                        const searchTerm = search;
                        const title = movie.title;

                        return searchTerm && title.startsWith(searchTerm) && title !== searchTerm;
                    })
                    .map((movie)=> (
                    <div onClick={() => onSearch(movie.title)} className='dropdown-row' key={movie.title}>
                        {movie.title}
                    </div> ))}
                </div>
        

            {
                movieList.filter((movie) => {
                    return search === ''
                    ? movie
                    : movie.title.includes(search)
                }).map((movie) => {
                    return (
                        <a className='global' href='/'>
                    <div key={movie.id} className='card'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /> 
                    </div>
                    <div>
                        <div className='details'>
                            <h4>{movie.title}</h4>
                            <div className='date-desc'>
                                <p>Release Date :{movie.release_date}</p>
                                <div className='desc'>
                                    <span>Overview :</span>
                                    <p>{movie.overview}</p>
                                </div>
                                <div className="carre">
                                    <div className="vote">
                                        <p>Vote average : {movie.vote_average}</p>
                                    </div>
                                    <img className='backdrop' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=''/>
                                </div>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.actor}`} alt="" />
                            </div>
                        </div>
                    </div>
                        </a>
                    )
                })
            }
        </div>
    
  )
}

export default Movie