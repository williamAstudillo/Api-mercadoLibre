const INITIAL_STATE = {
    products: []
};

const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                products: action.payload,
            };
        case 'ORDER':
            return {
                ...state,
                products: action.payload,
            };
        case 'FILTER':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default search;