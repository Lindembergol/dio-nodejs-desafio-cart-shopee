import createItem from "./services/item.js"
import * as cartServices from "./services/cart.js" 

const myCart = []

console.log('Welcome to the your Shopee Cart!')

const item01 = await createItem('Boneco Homem de Ferro', 59.99, 1)
const item02 = await createItem('Boneco Hulk', 29.99, 2)

await cartServices.addItem(myCart, item01)
await cartServices.addItem(myCart, item02)

//await cartServices.deleteItem(myCart, item02.name)

await cartServices.removeItem(myCart, item01)

await cartServices.displayCart(myCart)

await cartServices.calculateTotal(myCart)