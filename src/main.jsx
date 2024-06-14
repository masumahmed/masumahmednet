import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles.scss'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Photos from './pages/Photos'
import BlogEntry from './pages/BlogEntry'
import Contact from './pages/Contact'

function Main() {
    useEffect(() => {
        const pathname = new URLSearchParams(window.location.search).get('pathname');
        if (pathname) {
            window.history.replaceState({}, '', 'projects');
            // window.history.replaceState({}, '', pathname);
        }
    }, []);

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
