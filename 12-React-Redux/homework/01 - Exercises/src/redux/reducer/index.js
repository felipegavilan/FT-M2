import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from '../actions/types'

const initialState = {
   list: [],
   storeName:"",
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_PRODUCT:
            return{
               list: [...state.list, payload]

            }
        case DELETE_PRODUCT:
            const filtered = state.list.filter(d=> d.id !== payload)
            return{
                list : filtered,
            }
        case GET_STORE_NAME:
            return{
                ...state,
                storeName: payload,
            }
        default:
            return {...state}
    }
};

export default rootReducer;
