import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles.scss'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Photos from './pages/Photos'
import BlogEntry from './pages/BlogEntry'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<BlogEntry />} />
          <Route path="/photos" element={<Photos />} />

        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
)
