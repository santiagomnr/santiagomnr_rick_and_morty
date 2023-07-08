import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';

function Card(props) {
    const { id, name, gender, species, image, status, onClose, addFav, removeFav, myFavorites, origin } = props
    const [ isFav, setIsFav ] = useState(false);

    // useEffect(() => {
    //     myFavorites.forEach((fav) => {
    //        if (fav.id === props.id) {
    //           setIsFav(true);
    //        }
    //     });
    // }, [myFavorites]);

    // useEffect(() => {
    //     for (let i = 0; i < myFavorites.length; i++) {
    //       const fav = myFavorites[i];
    //       if (fav.id === props.id) {
    //         setIsFav(true);
    //         break;
    //       }
    //     }
    //   }, [myFavorites]);

    useEffect(() => {
        setIsFav(myFavorites.some(fav => fav.id === id));
      }, [myFavorites, id]);
      
    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false)
            removeFav(id)
        } else {
            setIsFav(true)
            addFav(props)
        }
    }
    return (
        <div className={style.appBox}>
            <div className={style.appCard}>
                {
                    isFav ? (
                        <button onClick={handleFavorite}>💚</button>
                    ) : (
                        <button onClick={handleFavorite}>🖤</button>
                    )
                }
                <div className={style.front}>
                    <img 
                        src={image} 
                        alt={name} 
                        className={style.image}
                    />
                </div>

                <div className={style.back}>
                    <button className={style.btn} onClick={()=> onClose(id)}>❌</button>
                    <Link to={`/detail/${id}`}>
                        <h2>Name: {name}</h2>
                    </Link>
                    <h2>Species: {species}</h2>
                    <h2>Gender: {gender}</h2>
                    <h2>Status: {status}</h2>
                    <h2>Origin: {origin.name}</h2>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites : state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav : (character)=> dispatch(addFav
        (character)),
        removeFav: (id) => dispatch(removeFav(id))
    }
}

export default connect(null, mapDispatchToProps)(Card)
