import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorite: [],
  allCharacter:[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const copyAllCharacter = [ ...state.allCharacter, action.payload];
      return {
        ...state,
        myFavorite: copyAllCharacter,
        allCharacter: [ ...copyAllCharacter ]
      };

    case FILTER:
      const copyFilter = state.allCharacter.filter(
        (character) => character.gender === action.payload
      )
      return {
        ...state,
        myFavorite: copyFilter
      }
    
    case ORDER:
      const orderCharacter = state.allCharacter.
      sort((a, b) => {
        if(action.payload === "A") {
          if(a.id < b.id) return -1;
          if(b.id < a.id) return 1;
          return 0;
        } else {
          if(a.id < b.id) return 1;
          if(b.id < a.id) return -1;
          return 0;  
        }
      })
      return {
        ...state,
        myFavorite: [...orderCharacter]
      };

    case REMOVE_FAV:
      const deletedCharacter = state.
      myFavorite.filter(
        character => character.id !== Number(action.payload)
      )
      return {
        ...state,
        myFavorite: deletedCharacter
      };
      
    default:
      return {
        ...state
      }
  }
};

export default reducer;
