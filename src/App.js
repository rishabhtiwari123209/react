
import './App.css';
import Register from './pages/register.js';
import Login from './pages/login.js'
import About from './pages/about.js'
import Home from './pages/home.js';
import Header from './components/header.js';
import UserList from './components/userList.js';

import {Route,BrowserRouter as Router, Routes } from 'react-router-dom'
function App() {
  return (
    <Router><div>
    <Header/>
    
        <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route path='/login'element={<Login/>}/> 
          <Route path='/about'element={<About/>}/> 
          <Route path='/register'element={<Register/>}/>
          <Route path='user' element={<UserList/>}/>
        </Routes>
      
    <footer/></div>
    </Router>
  );
}

export default App;
