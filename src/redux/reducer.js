import { ACTION_1,ACTION_2,ACTION_3,FAKE_TOKEN } from "./actions";

const initialState = {
    myFavorites: [],
    actualUser: ""
}

export function reducer(state=initialState,actions) {  
    switch (actions.type) {
        case ACTION_1:
            
            return {
                ...state,myFavorites: [...state.myFavorites,actions.payload]
            }
            break;
        case ACTION_2:
            let filtrado = state.myFavorites.filter( (item) => 
                    item != actions.payload
            )
            return {
                ...state,myFavorites : filtrado
            }
            break;
        case FAKE_TOKEN:
            console.log("token" + actions.payload)
            return {
                ...state , actualUser: actions.payload
            }
            break;
        default:
            return{
                ...state
            }
            break;
    }
}



