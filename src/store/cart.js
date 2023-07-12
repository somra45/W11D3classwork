

// export const getAllCart = (state) => {
//     cartValues = Object.values(state.cart);
//     for (let i = 0; i < cartValues.length, i++) {
//         cartValues[i].produceInfo = state.produce[cartValues[i].id];
//     }
//     return cartValues;
// }

export const addToCart = (produceId) => {
    const ADDTOCART = 'addToCart';
    return {
        type: ADDTOCART,
        produceId
    }
}

export const decrement = (produceId) => {
    const DECREMENT = 'decrement';
    return {
        type: DECREMENT,
        produceId
    }
}

export const removeFromCart = (produceId) => {
    const REMOVEFROMCART = 'removeFromCart';
    return {
        type: REMOVEFROMCART,
        produceId
    }
}

export const toggleCart = (boolean) => {
    const TOGGLECART = 'toggleCart';
    return {
        type: TOGGLECART,
        boolean
    }
}

export const cartReducer = (state = {}, action) => {
    const newState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case 'addToCart':
            if (newState[action.produceId]) {
                newState[action.produceId].count = newState[action.produceId].count + 1
            } else {
                newState[action.produceId] = {
                    id: action.produceId, 
                    count: 1,
                    date: new Date()
            }}
            newState.cartOpen = true;
            return newState;
        case 'decrement':
            const itemCount = newState[action.produceId].count;
            if (itemCount > 0) {
                newState[action.produceId].count = itemCount - 1;
            }
            return newState
        case 'removeFromCart':
            delete newState[action.produceId];
            newState.cartOpen = true;
            return newState;
        case 'toggleCart':
            newState.cartOpen = action.boolean;
            return newState;
        default: 
            return state;
        }
};