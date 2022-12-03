const { ADD_PRODUCT, DELETE_PRODUCT } = require('../actions/types');

const initialState = {
  list: [],
  
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_PRODUCT:
            return{
                ...state,
                   list: [...state.list, payload],
                  }
        case DELETE_PRODUCT:
            const arr = state.list.filter(char => char.id !== payload)
            return{
                ...state,
                list: arr,
            }
        default:
            return state;
    }
}

export default rootReducer
