import * as produceData from '../mockData/produce.json'

export const populateProduce = () => {
    const POPULATE = 'produce/POPULATE';
    return {type: POPULATE,
            produce: produceData};
}

export const likeProduce = (produceId) => {
    const LIKE = 'LIKE';
    return {type: LIKE,
            produceId};
}


const produceReducer = (state = {}, action) => {
    const newState = Object.assign({},Object.freeze(state));
    switch(action.type) {
        case 'produce/POPULATE':
            for (let i = 0; i < action.produce.length; i++) {
                newState[action.produce[i].id] = action.produce[i];
            }
            return newState;
        case "REMOVE":
            delete newState[action.produceId];
            return newState;
        case "LIKE":
            newState[action.produceId].liked = !newState[action.produceId].liked
            return newState;
        default:
            return state;
    }
}

export default produceReducer;