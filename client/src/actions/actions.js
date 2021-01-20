import axios from 'axios';
export function search(payload) {
    return function (dispatch) {
        console.log("payload",payload.input);
        return axios
            .get(`http://localhost:3000/api/search?query=${payload.input}`)
            .then((res) => {
               dispatch({ 
               type: 'SEARCH', 
               payload: res.data,
               text:payload.input
            });
            })
            .catch((e) => console.log('error auxilio search '));
    };
}
export function order(payload) {
    return {
        type: 'ORDER',
        payload
    };
}
export function filter(payload) {
    return {
        type: 'FILTER',
        payload
    };
}
export function keepInput(payload) {
    return {
        type: 'INPUT',
        payload
    };
}
export function cache(payload) {
    return {
        type: 'CACHE',
        payload
    };
}