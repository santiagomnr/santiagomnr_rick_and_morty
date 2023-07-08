import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorite: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorite: [...state.
                myFavorite, action.payload]
            }
        case REMOVE_FAV:
            let deletedCharacter = state.
            myFavorite.filter(character =>
                character.id !== Number(action.
                payload))
                return {
                    ...state,
                    myFavorite: deletedCharacter
                }

        default:
            return {
                ...state
            }
    }
}

export default reducer;


























// import { ADD_FAV, REMOVE_FAV, FILTER } from "./actions-types";

// const initialState = {
//     myFavorites: [],
//     allCharacter: []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_FAV:
//             const copyAllCharacter = state.allCharacter;
//                 return {
//                     ...state,
//                     myFavorites: copyAllCharacter,
//                     allCharacter: copyAllCharacter
//                 }
//         case FILTER:
//           return {
//             ...state
//           }  
            

//         case REMOVE_FAV:
//             let deleteCharacter = state.myFavorites.filter(character => character.id !== Number(action.payload))
//             return {
//                 ...state,
//                 myFavorites: deleteCharacter
//             }


        
//         default:
//             return {
//                 ...state
//             }
//     }
// }

// export default reducer;
