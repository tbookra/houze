import {ActionTypes} from "../constants/action-types"

export const add_selectedProducts = (product) => {
    return {
        type: ActionTypes.ADD_SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProducts = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product,
    }
}

export const clearList = () => {
    return {
        type: ActionTypes.CLEAR_LIST,
       
    }
}

export const rateBeer = (rateObj) => {
    return {
        type: ActionTypes.RATE_BEER,
        payload: rateObj,
    }
}