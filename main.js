import './style.css'

class Item{
  constructor(name, price, quantity) {
    this.id = crypto.randomUUID()
    this.name = name
    this.price = price
    this.quantity = quantity
    this.isInStock = true
  }

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

}

class CartManager{
  constructor() {
    this.cart = []
  }

  addToCart(item) {
    this.cart.push(item)
  }
}

const cartManager = new CartManager();
const shopManager = new ShopManager();
const keyboard = new Item("keyboard", 30, 20);
const mouse = new Item("mouse", 10, 40);
const monitor = new Item("monitor", 350, 10);
const mousepad = new Item("mousepad");
