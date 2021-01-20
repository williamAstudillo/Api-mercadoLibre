const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const axios = require('axios')

server.use(bodyParser.json());
var posts=[]
server.get('/api/search',  (req, res)=> {
    const query = req.query.query;
    console.log("query",query)
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(resp => {
        if(posts[0]){
            posts=[]
        }
        resp.data.results.map(e=>{
            obj={
                query,
                id:e.id,
                title:e.title,
                price:e.price,
                currency_id: e.currency_id,
                available_quantity: e.available_quantity,
                thumbnail: e.thumbnail,
                condition: e.condition
            }
            posts.push(obj)
        })
        res.send(posts)
    })
})






module.exports = { posts, server };
