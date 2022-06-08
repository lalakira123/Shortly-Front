import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Ranking from './Ranking';

import './../assets/css/reset.css';
import './../assets/css/style.css';

function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path='/' element={<Ranking />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

        /*
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/user' element={<UserPage />}/> */