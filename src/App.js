import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Snacks from './components/Snacks';
import Dinner from './components/Dinner';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/dinner" element={<Dinner />} />
      </Routes>
    </>
  );
}

export default App;
