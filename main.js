import './style.css'

class Item{
  constructor(name, price, quantity) {
    this.id = crypto.randomUUID()
    this.name = name
    this.price = price
    this.quantity = quantity
    this.isInStock = true
  }

  // oce Item mijenjat stanje isInStock ili ShopManager?
  notInStock() {
    this.isInStock = false
  }

  incrementQuantity() {
    this.quantity++
  }

  decrementQuantity() {
    this.quantity--
  }


}

class ShopManager{
  constructor() {
    this.shop = []
  }

  addToShop(item) {
    this.shop.push(item)
  }

  removeFromShop(item) {

  }
}

class CartManager{
  constructor() {
    this.cart = []
  }

  addToCart(item) {
    this.cart.push(item)
  }

  removeFromCart(itemId) {

  }
}





const object = {
  name: "Dario",
  lastName: "fafa",
  address: {
    street: "gaga"
  }
}

const {name, address} = object

console.log(name)
console.log(address)
const object2 = {
  ...object,
  address: {
    ...object.address
  }
}

object2.name = "Nemanja"

let a  = 5
let b = a
b = 10

console.log("a", a)
console.log("b",b)


console.log("object", object)
console.log("object2", object2)
