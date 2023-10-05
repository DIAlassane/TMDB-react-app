import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import MovieBox from '../components/MovieBox'
import '../css/Home.css'
import Pager from '../components/Pager'
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL,API_KEY } from '../api'

const Home = () => {
    // state de notre application - etat de notre app donc rendu initial
    const [list, setList] = useState()
    let [page, setPage] = useState(1)
    const [search, setSearch] = useState()

    // Code a executer apres le rendu ou maj de l'etat
    useEffect(() => {
        axios.get(`${API_URL}?api_key=${API_KEY}cde&language=fr-FR&page=${page}`)
        .then(({data}) => setList(data.results))
        .catch((err) => console.log(err))
    }, [page]) // tableau de dependance
// Evenement - pour chercher les valeurs de la list sur notre bar de recherche et les afficher {onClick, onChange etc}
    const onChange = (list) => {
        setSearch(list.target.search)
    }
    const onSearch= (searchTerm) => {
        setSearch(searchTerm);
    }

  return (
    <div className='globalise'>
        <form className='recherche' action="">
                <input type="text" 
                placeholder='Recherche ...'
                onChange={(e) => setSearch(e.target.value)}
                value={search} onChanges={onChange}
                />
                <button onClick={()=> onSearch(search)}>Search</button>  
            </form>
                <div className="dropdown">
                    {list && list.filter(list => {
                        const searchTerm = search;
                        const title = list.title;

                        return searchTerm && title.startsWith(searchTerm) && title !== searchTerm;
                    })
                    .map((list)=> (
                    <div onClick={() => onSearch(list.title)} className='dropdown-row' key={list.title}>
                        {list.title}
                    </div> ))}
                </div>
                <Pager page={page} setPage={setPage}/>
                <div className="container">
                    <div className="grid">
                {
                list && list.filter((list) => {
                    return search === ''
                    ? list
                    : list.title.includes(search)
                }).map((list) => {
                    return (    
                        <div>
                            <MovieBox list={list} />
                        </div>   
                                             
                    )
                })
            }
                    </div>
                </div>
            <Pager page={page} setPage={setPage}/>
        
    </div>
  )
}

export default Home