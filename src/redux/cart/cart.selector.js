import {createSelector} from 'reselect';


const selectCart = state => state.cart; //INPUT SELECTOR 

export const selectCartItems = createSelector(
   [selectCart],
   (cart) => cart.cartItems 
);


export const selectCartHidden = createSelector(

    [selectCart],
    cart => cart.hidden
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce((accumulatedyQuantity, cartItem)=> 
    accumulatedyQuantity + cartItem.quantity,0) 
);


export const selectTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedyQuantity, cartItem)=> 
    accumulatedyQuantity + cartItem.quantity * cartItem.price,
    0)
);

