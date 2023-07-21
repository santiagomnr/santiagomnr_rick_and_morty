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
      const deletedCharacter = state.
      myFavorite.filter(
        character => character.id !== Number(action.payload)
      )
      return {
        ...state,
        myFavorite: deletedCharacter
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer;
