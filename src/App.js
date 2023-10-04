import { BrowserRouter,Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='*' element={<Home />}></Route>
        <Route path='/movie/id' element={<MovieDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
