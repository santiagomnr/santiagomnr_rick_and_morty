import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = (props) => {
    const { myFavorites } = props
    return (
        <div>
            <h1>My Favorites 💘</h1>
            {
                myFavorites.map(character => {
                    return (
                        <Card 
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            species={character.species}
                            gender={character.gender}
                            image={character.image}
                            status={character.status}
                            onClose={character.onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

// const mapDispatchToProps = () => {
//     return null
// }

export default connect(
    mapStateToProps, 
    null)
    (Favorites);

