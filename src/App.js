import { BrowserRouter,Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='*' element={<Home />}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
