const INITIAL_STATE = {
    products: [],
    input:''
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
        case 'INPUT':
            return {
                ...state,
                input: action.payload,
            };
        default:
            return state;
    }
};

export default search;