import './Products.css';

function Product({ title, price,stock,image,condition,Key}) {
    return (
        <container className="App">
                <h3 className="title">
                {title}
                </h3><br></br><br></br>
                <h2>Precio :  ${price}</h2>
                <h3>Condición: {condition}</h3>
                <p> unidades: {stock}</p>
                <img id="image" src={image} width="200" height="300"></img>
        
        </container>
    );
}

export default Product;