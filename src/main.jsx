import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, useHistory } from 'react-router-dom'

import './styles.scss'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Photos from './pages/Photos'
import BlogEntry from './pages/BlogEntry'
import Contact from './pages/Contact'

function Main() {
    const location = useLocation();
    const history = useHistory();
  
    useEffect(() => {
      // Check if the URL contains the redirect query parameter
      const params = new URLSearchParams(location.search);
      const redirectPath = params.get('redirect');
      if (redirectPath) {
        // Decode the URI component and navigate to the correct path
        history.replace(decodeURIComponent(redirectPath));
      }
    }, [location, history]);

    return <React.StrictMode>
        <BrowserRouter basename="">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:title" element={<BlogEntry />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/contact" element={<Contact />} />
                <Route component={<h1 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>404</h1>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
}

export default Main;

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
