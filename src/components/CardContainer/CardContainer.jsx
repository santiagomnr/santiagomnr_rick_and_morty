import Card from '../Card/Card';
import style from './CardContainer.module.css'

export default function Cards(props) {
    const { characters, onClose } = props
    
    return <div className={style.container}>
        {
            characters.map((character) => {
                return <Card 
                    key = {character.id}
                    id={character.id}
                    name = {character.name}
                    species = {character.species}
                    gender = {character.gender}
                    image = {character.image}
                    status ={character.status}
                    // origin = {character.origin.name}
                    onClose = {() => onClose(character.id)}
                />
            })
        }
    </div>;
}
