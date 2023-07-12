import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Nav from './components/NavBar/Nav';
import About from './components/About/About';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters, setCharacters] = useState([]);

   const [ access, setAccess] = useState(false);
   const EMAIL = 'santi@mail.com';
   const PASSWORD = '1234santi';

   const { pathname } = useLocation();
   const navigate = useNavigate()

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
   };

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home')
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate])
   
   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== Number(id)));
   };

   return (
      <div className='App'>
            { pathname !== "/" && <Nav onSearch={onSearch} /> }
         <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/home" element={<CardContainer characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
