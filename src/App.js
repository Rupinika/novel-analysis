import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import { Route, Routes } from 'react-router-dom';
import Review from './components/Review';
import Write from './components/Write';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/novel-anaylsis' element={<Cards />} />
        <Route path='/Review' element={<Review />} />
        <Route path='/Write' element={<Write />} />
      </Routes>
    </>
  );
}

export default App;
