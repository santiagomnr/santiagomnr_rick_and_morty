import Card from './Card';

export default function Cards(props) {
   const {characters, onClose} = props;

   return (
      <div>
         {characters.map((character) => (
            <card key={character.id} character={character} onClose={onClose} />
         ))}
      </div>
   );
}