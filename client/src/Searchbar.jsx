import { Navbar ,Form,FormControl,Button } from 'react-bootstrap';
import React, { useState } from 'react';
import {search} from './actions/actions'
import { connect } from "react-redux";

function SearchBar({search , product}) {
  const [input,setInput] = useState('')
  const products=product.products


  const handleSubmit = (e) => {
        e.preventDefault();
        
    };
    const handleChange =(e)=>{
        setInput({
            ...input,
            input:e.target.value
        })
        
     
        
    }
    const handleClick =()=>{
        
         search(input)

    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Henry </Navbar.Brand>
                <Form inline onclick={handleSubmit}>
                    <FormControl 
                    type="text" 
                    placeholder="Search"
                     className="mr-sm-2" 
                    onChange={handleChange}
                     />
                    <Button variant="outline-info" onClick={handleClick}>Search</Button>
                </Form>
            </Navbar>
            <br />
            
        </>
    );
}

function mapStateToProps(state) {
    
    return {
        product: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        search: input => dispatch(search(input))  
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);




// import React from 'react';
// import { connect } from 'react-redux';
// import Product from './Product'
// import { order, filter } from './actions/actions'

// const Products = ({ product, order, filter }) => {
//     var products = product.products
//     const handleChange = (e) => {
//         // console.log(e.target.value)
//         if (e.target.value === 'menor') {
//             var productsOrder = products.sort(function (prev, next) {
//                 return prev.price - next.price
//             })
//             order(productsOrder)
//         }
//         if (e.target.value === 'mayor') {
//             var productsOrder = products.sort(function (prev, next) {
//                 return prev.price - next.price
//             })
//             order(productsOrder.reverse())
//         }
//     }
//     const handleChangeC = (e) => {
//         // console.log(e.target.value)
//         if (e.target.value === 'new') {
//             var filter = products.filter(e => {
//                 e.condition === 'new'
//             })
//         }
//         if (e.target.value === 'used') {
//             var filter = products.filter(e => {
//                 e.condition !== 'new'
//             })
//         }
//         return (
//             <div className="card">
//                 <form>
//                     Ordenar por precio
//             <select
//                         class="form-control"
//                         name="filtrado"
//                         onChange={handleChange}
//                     >
//                         <option disabled>Ordenar</option>
//                         <option value="mayor" >Mayor a menor </option>
//                         <option value="menor">Menor a mayor </option>
//                     </select>
//                 </form>
//                 <form>
//                     filtar por condicion
//             <select
//                         class="form-control"
//                         name="filtrado"
//                         onChange={handleChangeC}
//                     >
//                         <option disabled>Seleccione una condicion</option>
//                         <option value="new" >Nuevo</option>
//                         <option value="used">Usado</option>
//                     </select>
//                 </form>
//                 {
//                     products.map((e, i) => {
//                         return <Product
//                             Key={i}
//                             title={e.title}
//                             price={e.price}
//                             stock={e.available_quantity}
//                             image={e.thumbnail}
//                             condition={e.condition}
//                         />
//                     })
//                 }
//             </div>
//         );
//     };

//     function mapStateToProps(state) {

//         return {
//             product: state
//         };
//     }
//     function mapDispatchToProps(dispatch) {
//         return {
//             order: input => dispatch(order(input)),
//             filter: input => dispatch(filter(input))
//         };
//     }

//     export default connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )(Products);