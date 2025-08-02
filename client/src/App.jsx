import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import WriteArticle from './pages/WriteArticle'
import Dashboard from './pages/Dashboard'
import RemoveBackground from './pages/RemoveBackground'
import BlogTitle from './pages/BlogTitle'
import GenerateImage from './pages/GenerateImages'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='WriteArticle' element={<WriteArticle/>}/>
          <Route path='RemoveBackground' element={<RemoveBackground/>}/>
          <Route path='BlogTitle' element={<BlogTitle/>}/>
          <Route path='GenerateImages' element={<GenerateImage/>}/>
          <Route path='RemoveObject' element={<RemoveObject/>}/>
          <Route path='ReviewResume' element={<ReviewResume/>}/>
          <Route path='Community' element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
