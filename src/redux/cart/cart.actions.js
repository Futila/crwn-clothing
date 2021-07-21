import CartActionstypes from "./cart.types";

export const toogleCartHidden = () => ({
    type: CartActionstypes.TOOGLE_CART_HIDDEN
})

export const addItem = item =>({
    type: CartActionstypes.ADD_ITEM,
    payload: item
});