import { Navbar ,Form,FormControl,Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { search, keepInput,cache} from './actions/actions'
import { connect } from "react-redux";

function SearchBar({ search, product, keepInput, cache}) {
  const [input,setInput] = useState('')
  const products=product.products
  const dataCache=product.cache
console.log(dataCache)
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
        // var find = dataCache.find(e=>e.tile === input)
        // console.log("find searchbar",find)
        // if(find){
        //     cache(find.info)
        // }else{
        // }
        search(input)
        
        keepInput(input)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"> </Navbar.Brand>
                <Form className="contSearch"inline onclick={handleSubmit}>
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
        search: input => dispatch(search(input)),
        keepInput: input => dispatch(keepInput(input)), 
        cache: input => dispatch(cache(input))  
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);




