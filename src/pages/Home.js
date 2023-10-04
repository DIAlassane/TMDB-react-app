import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import MovieBox from '../components/MovieBox'
import '../css/Home.css'
import Pager from '../components/Pager'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [list, setList] = useState()
    let [page, setPage] = useState(1)
    const [search, setSearch] = useState()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=ceb50c2809a3dc3e85025e306e2a2cde&language=fr-FR&page=${page}`)
        .then(({data}) => setList(data.results))
        .catch((err) => console.log(err))
    }, [page])

    const onChange = (list) => {
        setSearch(list.target.search)
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
                        <MovieBox list={list} />                      
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