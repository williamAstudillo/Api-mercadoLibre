import React from 'react';
import { connect } from 'react-redux';
import Product from './Product'
import { order, filter, search} from './actions/actions'
import { useState, useEffect } from 'react';

const Products = ({ product, order, filter, search }) => {
 
    var  products = product.products
    var  inputA=product.input
    var copy = product.copyProducts
   
        const [input, setInput] = useState({
            currentPage: 1,
            postsPerPage: 30,
            page: 1

        })
    
    const handleChange =  (e) =>{
        // console.log(e.target.value)
        if(e.target.value === 'menor'){
            
            var productsOrder =products.sort(function (prev, next) {
                return prev.price - next.price
            })
             order(productsOrder)
        }
        if(e.target.value === 'mayor'){
       

            var productsOrder =products.sort(function (prev, next) {
                return prev.price - next.price
            })
             order(productsOrder.reverse())
        }
    }
    const handleChangeC =  (e) =>{
        if(e.target.value === 'new'){
            var aux=[]
            copy.map(e=>aux.push(e))
                var find = aux.filter(e => 
                    e.condition === 'new'
                )
                 filter(find)
            }
            if(e.target.value === 'used'){
                var aux = []
                copy.map(e => aux.push(e))
                var find = aux.filter(e =>
                    e.condition === 'used'
                )
                 filter(find)
            }
            if(e.target.value === 'todos'){
                filter(copy)
            }
    }
   
    // console.log("data", data.data)

    const indexOfLastPost = input.currentPage * input.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - input.postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    const arr = []
    for (let i = 0; i < Math.ceil(products.length / input.postsPerPage); i++) {
        arr.push(i + 1)
    }
    const pagination = (number) => {
        setInput({
            ...input,
            currentPage: number,
            page: number
        })
    }
    return (
        <div className="card">
         <div className="orderPrice">
             Ordenar por precio
            <select
                class="form-control"
                name="filtrado"
                onChange={handleChange}
             >
                <option disabled>Ordenar</option>
                <option value="mayor" >Mayor a menor </option>
                <option value="menor">Menor a mayor </option>
            </select>
         </div>
            <div className="filter">
             Filtar por condicion<br></br>
            <select
                class="form-control"
                name="filtrado"
                onChange={handleChangeC}
             >
                <option disabled>Seleccione una condicion</option>
                <option value="new" >Nuevo</option>
                <option value="used">Usado</option>
                <option value="todos">Todos</option>
            </select>
         </div>
             <h2 className="pagina">Pagina {input.page}</h2>
         <div className="container">
           {  
                currentPosts.map((e,i) => {
                  return <Product 
                  Key={i}
                  title={e.title} 
                  price={e.price} 
                  stock={e.available_quantity}
                  image={e.thumbnail}
                  condition={e.condition}
                  />
               })
            }
            </div>
            <div className="flexThis pagination">
                {arr.map((number) => {
                    return (
                        

                        <button href ="f" className="page-link" onClick={() => pagination(number)}>
                            {number}
                        </button>
                        
                    )
                })}
            </div>
    </div>
    );
};


function mapStateToProps(state) {

    return {
        product: state,
        
    };
}
function mapDispatchToProps(dispatch) {
    return {
        order: input => dispatch(order(input)),
        filter: input => dispatch(filter(input)),
        search: input => dispatch(search(input)),
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);