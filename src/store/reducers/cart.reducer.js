/* eslint-disable prettier/prettier */
import { guessTotal } from "../../utils/functions";
import { cartTypes } from "../types";

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

const initialState = {
    items: [],
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart = [];
            if(state.items.find((item) => item.id === action.item.id)) {
                updatedCart = state.items.map((item) => {
                    if(item.id === action.item.id) item.quantity += 1;
                    return item;
                });
            } else {
                const item = { ...action.item, quantity: 1};
                updatedCart = [ ...state.items, item];
            }
            return { 
                ...state,
                items: updatedCart,
                total:  guessTotal(updatedCart),
            };
        case REMOVE_FROM_CART:
            const filteredCart = state.items.filter(
                (item) => item.id !== action.id);
            return {
                ...state,
                items: filteredCart,
                total: guessTotal(filteredCart),
            };
        default:
            return state;
    }
};

export default cartReducer;