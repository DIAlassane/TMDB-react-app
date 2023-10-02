import React from 'react'
import Movie from '../components/Movie';
import Navbar from '../components/Navbar';
import '../css/Movie.css'

function Main() {
    
  return (
    <div>
        <Navbar />

        <div className='films'>
            <h2>Nos Films</h2>
            <Movie />
        </div>
    </div>
  )
}

export default Main