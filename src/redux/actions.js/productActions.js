import { ActionType } from "../actiontypes.js/actionType"

export const setProduct = (products) => {
    return {
        type : ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type : ActionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (product) => {
    return {
        type : ActionType.REMOVED_SELECTED_PRODUCT,
        payload: product
    }
}