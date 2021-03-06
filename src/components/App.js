import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './Header';
import Ranking from './Ranking';
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserPage from './UserPage';

import UserContext from './../contexts/UserContext';

import './../assets/css/reset.css';
import './../assets/css/style.css';

function App() {
  const [user, setUser] = useState({name:"", token:"", id:""});
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path='/' element={<Ranking />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/user' element={<UserPage />}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

