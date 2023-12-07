import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/Register'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import Profile from './pages/Profile';
import EditPage from './pages/Editpage';
import { UserContextProvider } from './context/UserContext'

const App = () => {
  return (
 
   <UserContextProvider>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/createPost" element={<CreatePost />}/>
        <Route  path="/posts/post/:id" element={<PostDetails />}/>
        <Route  path="/profile/:id" element={<Profile />}/>
        <Route  path="/edit/:id" element={<EditPage />}/>
        </Routes>
   </UserContextProvider>
     
   
    
  
     

  )
}

export default App
