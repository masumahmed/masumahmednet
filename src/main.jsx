import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Photos from './pages/Photos'
import BlogEntry from './pages/BlogEntry'
import Contact from './pages/Contact'
import Modal from './components/Modal'
import './styles.scss'

function Main() {
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      // Check if the URL contains the redirect query parameter
      const params = new URLSearchParams(location.search);
      const redirectPath = params.get('redirect');
      if (redirectPath) {
        // Decode the URI component and navigate to the correct path
        navigate(decodeURIComponent(redirectPath));
      }
    }, [location, navigate]);

    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:hash/:titleURL" element={<BlogEntry />} />
        <Route path="/blog/:hash" element={<BlogEntry />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<meta httpEquiv='refresh' content='0; URL=/resume.pdf'/> } />
        <Route path="/*" component={<h1 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>404</h1>} />
    </Routes>
}

export default Main;

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basename="">
            <Modal />
            <Main />
        </Router>
    </React.StrictMode>
);
