import CartActionstypes from "./cart.types";

export const toogleCartHidden = () => ({
    type: CartActionstypes.TOOGLE_CART_HIDDEN
})

export const addItem = item =>({
    type: CartActionstypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionstypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionstypes.CLEAR_ITEM_FROM_CART,
    payload: item
})