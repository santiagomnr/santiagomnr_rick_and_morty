export default function Card(props) {
   const {character, onClose} = props;
 
   //   character = {
   //     id: 1,
   //     name: "Rick Sanchez",
   //     species: "Human",
   //     gender: "Male",
   //     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
   //   };
 
   return (
     <div>
       <button onClick={onClose}>X</button>
       <h2>Name:{character.name}</h2>
       <h2>Species:{character.species}</h2>
       <h2>Gender:{character.gender}</h2>
 
       <img src={character.image} alt={character.name} />
     </div>
   );
 }