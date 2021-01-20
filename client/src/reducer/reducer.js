const INITIAL_STATE = {
    products: [],
    copyProducts:[],
    input:'',
    cache:[]
};

const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH':
            var find=state.cache.find(e=>e.title === action.text)
            console.log("find reducer",find)
            if(find){
                
                        return {
                            ...state,
                            products: find.info,
                        };
                
            }else{ 
                var obj={
                    title:action.text,
                    info:action.payload
                }
                return {
                    ...state,
                    products: action.payload,
                    copyProducts:action.payload,
                    cache:state.cache.concat(obj), 
                };
            }
            return {
                ...state
            }
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
        case 'CACHE':
            return {
                ...state,
                products: action.payload,
                copyProducts: action.payload
            };
        default:
            return state;
    }
};

export default search;