

function Product({ title, price,stock,image,condition,Key}) {
    return (
        <div className="App">
            
                <h3>{title}</h3>
                <h3>{condition}</h3>
                <p>{stock}</p>
                <h2>${price}</h2>
                <img src={image} width="500" height="600"></img>
        
        </div>
    );
}

export default Product;