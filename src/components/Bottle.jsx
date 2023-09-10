
import './bottle.css'
const Bottle = ({bottle, handleCartItem}) => {
    // console.log(bottle);
    const {name, img, price} = bottle
    return (
        <div className='bottle'>
            <h3>Bottle information :{name}</h3>
            <img src={img} alt="" />
            <p>price:${price}</p>
            <button onClick={() => handleCartItem(bottle)}><span className='buttonStyle'>Purchase</span></button>
           
        </div>
    );
};

export default Bottle;