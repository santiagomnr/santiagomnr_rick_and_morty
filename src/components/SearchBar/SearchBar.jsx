import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   let [ id, setId ] = useState('');

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
      }
   }

   const handleChange = (event) => {
      setId(event.target.value);
   }

    return (
      <div className={style.appSearch}>
         <div className={style.appInput}>
            <input
               type='search'
               placeholder='Busca un personaje'
               className={style.input}
               onKeyUp={handleEnter}
               onChange={handleChange}
               value={id}
            />
            <button onClick={()=> props.onSearch(id)} className={style.btn}></button>
         </div>
      </div>
    )
 };
