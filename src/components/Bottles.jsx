import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLs, getStoredCart } from "../utilities/Local_storage";


const Bottles = () => {
    // data load korar process
    const [bottles, setBottles] = useState([])
    // cart section how to add bottle purchase
    const [addCart, setAddCart] = useState([])
// data fetch kora
    useEffect( () => {
        fetch('bottles.json')
        .then(res => res.json())
        // usestate ee data set kora (setBottles)
        .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        console.log(bottles.length);
        if (bottles.length > 0) {
            const StoredCartLs = getStoredCart()
            console.log(StoredCartLs)
        }
    } ,[bottles])

    const handleCartItem = bottle => {
        const getCart = [...addCart, bottle]
        setAddCart(getCart)
        addToLs(bottle.id)
    }
    return (
        <div>
            <h2><span className="spanstyle">Bottles belongs here</span> :{bottles.length}</h2>
            <h4>Add purchase cart: {addCart.length}</h4>
           <div className="bottle_container">
           {
                bottles.map(bottle => <Bottle 
                bottle = {bottle}
                key={bottle.id}
                handleCartItem = {handleCartItem}
                ></Bottle>)
            }
           </div>
           </div>
    );
};

export default Bottles;