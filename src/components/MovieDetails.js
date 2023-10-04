import React from "react"

function MovieDetails({list}) {

  return (
    <div>
        {
                list.map((movie) => {
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

export default MovieDetails