import { Routes, Route } from 'react-router-dom'

import Layout from './Layout.tsx'
import Home from './pages/Home/Home.tsx'
import Projects from './pages/Projects/Projects.tsx'
import About from './pages/About/About.tsx'
import Contact from './pages/Contact/Contact.tsx'

import './App.css'

// main app component, defining the routes and layout
function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
