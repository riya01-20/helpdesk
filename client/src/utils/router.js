import React from 'react'; // Import React
import {Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Home from '../pages/home';

function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default Router;