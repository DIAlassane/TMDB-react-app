import React, { useEffect, useState } from 'react'
import '../App.css'
import { Modal,show,Button} from 'react-bootstrap'

const MovieBox = ({list}) => {
    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

  return (
    <div  className='movie-box' >
        <div className="overlay">
        <img src={`https://image.tmdb.org/t/p/w200${list && list.poster_path}`} alt={`${list && list.title}`} Poster/>
        </div>
        <div className="corp">
            <h3>{list.title}</h3>
            <button type='button' onClick={handleShow} className='btn light-details'>Detail</button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Details : {list.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img className="card-img-top" style={{width:'14rem'}}src={`https://image.tmdb.org/t/p/w200${list && list.poster_path}`} alt={`${list && list.title}`} Poster />
            <h3>{list.title}</h3>
            <h4>Note : {list.vote_average}</h4>
            <h5>Date de sortie : {list.release_date}</h5>
            <br></br>
            <h6>Description :</h6>
            <p>{list.overview}</p>
            <p>Acteurs : {list && list.actors}</p>
        
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default MovieBox