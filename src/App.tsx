import { Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </>
  );
}

export default App
