import { ActionType } from "../actiontypes.js/actionType";

const initialState = {
        products : []
}

export  const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionType.SET_PRODUCTS:
            console.log("ccc");
            return {...state, products:action.payload};
        default:
            return state;
    }

}

const initialStateSe = {

}

export const selectedProductReducer = (state=initialStateSe, action) => {
    switch (action.type) {
        case ActionType.SELECTED_PRODUCT:
            console.log("zoo", state);
            
            return {...state};
    
        default:
            return state;
    }
}