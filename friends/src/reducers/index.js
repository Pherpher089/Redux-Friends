import {FETCHING, SUCCESS, FAILURE, LOGIN_START} from '../actions'

const initialState = {
    friends: [],
    error: '',
    isFetching: false,
    isLoggingIn: false
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_START: {
            return {
              ...state,
              isLoggingIn: true
            };
          }
        case FETCHING:
            return{
                ...state,
                isFetching: true
            }
        case SUCCESS:
            return{
                ...state,
                friends: action.payload,
                isFetching: false
            }
        case FAILURE:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}