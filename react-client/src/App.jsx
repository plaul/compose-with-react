import React from 'react'
import {Routes, Route, NavLink} from "react-router-dom";
import './App.css'
import CreatePost from './pages/CreatePost';
import MainPage from './pages/MainPage';
import Post from './pages/Post'

const App = () => {
  return (
    <div>
      <div className="navbar">
        <div className="links"> 
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/createpost">Create Post</NavLink>
        </div>
      </div>
  
    <Routes>
      <Route path="/" element= {<MainPage />} />
      <Route path="/createpost" element = {<CreatePost />} />
      <Route path="/post/:postId" element={<Post />}/>
    </Routes>
    </div>
  )
}

export default App;