
export const addToCart = (produceId) => {
    const ADDTOCART = 'addToCart';
    return {
        type: ADDTOCART,
        produceId
    }
}

export const cartReducer = (state = {}, action) => {
    const newState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case 'addToCart':
            if (newState[action.produceId]) {
                newState[action.produceId].count = newState[action.produceId].count + 1
            } else {
                newState[action.produceId] ={
                    id: action.produceId, 
                    count: 1
            }}
            return newState;
        default: 
            return state;
        }
};