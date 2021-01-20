import React from 'react';
import { connect } from 'react-redux';
import Product from './Product'
import { order,filter } from './actions/actions'
import { useState } from 'react';

const Products = ({ product,order,filter }) => {
    var  products = product.products

   
        const [input, setInput] = useState({
            currentPage: 1,
            postsPerPage: 30,
            page: 1

        })
    
    const handleChange = (e) =>{
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
    const handleChangeC = (e) =>{
        // console.log(e.target.value)
        if(e.target.value === 'new'){
            var find = products.filter(e => 
                e.condition === 'new'
            )
            filter(find)
        }
        if(e.target.value === 'used'){
            var find = products.filter(e =>
                e.condition !== 'new'
            )
            filter(find)
        }
    }
   

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
             filtar por condicion
            <select
                class="form-control"
                name="filtrado"
                onChange={handleChangeC}
             >
                <option disabled>Seleccione una condicion</option>
                <option value="new" >Nuevo</option>
                <option value="used">Usado</option>
            </select>
         </div>
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
                        

                        <button href ="f" className="pageNumbers" onClick={() => pagination(number)}>
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
        product: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        order: input => dispatch(order(input)),
        filter: input => dispatch(filter(input))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);