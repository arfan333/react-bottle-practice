const getStoredCart = () => {
    const storedCartStr = localStorage.getItem('cart')
    if (storedCartStr) {
     return JSON.parse(storedCartStr)
    }
    return []
}

const saveCartToLs = cart => {
const cartStr = JSON.stringify(cart)
localStorage.setItem('cart', cartStr)
}

const addToLs = id => {
    const cart = getStoredCart()
   cart.push(id)
//    save to local storage process
saveCartToLs(cart)
}
export { addToLs, getStoredCart }