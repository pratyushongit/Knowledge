import { ADD_INGREDIENT } from './custom.actions';

const initialState  = {
    ingredients : [
        {name : 'Apples', quantity : 5},
        {name : 'Tomatoes', quantity : 10},
    ]
}

export function customReducer(state = initialState , action){
    switch (action.type){
        case ADD_INGREDIENT : return {
            ...state,
            ingredients : [...state.ingredients, action.payload]
        };
        default : return state;
    }
}