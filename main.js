import './style.css'

// const itemName = document.querySelector(".item-name");
// const itemPrice = document.querySelector(".item-price");
// const itemQuantity = document.querySelector(".item-quantity");
// const itemStock = document.querySelector(".item-stock");
// const addToCartBtns = document.querySelector(".add-to-cart-btns")

const shopOfferList = document.querySelector(".shop-offer-list");
const cartList = document.querySelector(".cart-list");

let quantity = 0


class Item{
  constructor(name, price, quantityInStock) {
    this.id = crypto.randomUUID()
    this.name = name
    this.price = price
    this.quantityInStock = quantityInStock
    this.quantityToBuy = 0
    this.isInStock = true
  }

  notInStock() {
    this.isInStock = false
  }

  incrementQuantityInStock() {
    this.quantityInStock++
  }

  decrementQuantityInStock() {
    this.quantityInStock--
  }

  incrementQuantityToBuy() {
    this.quantityToBuy++
  }

  decrementQuantityToBuy() {
    this.quantityToBuy--
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
    return this.shop.splice(this.shop.indexOf(item), 1)
  }

  findItem(itemId) {
    this.shop.find(item => item.id === itemId)
  }

  renderOffer() {
    // let quantity = 0
    this.shop.forEach(item => {
      const html = `<li class="offer-item" data-id="${item.id}">
                      <p class="name">${item.name}</p>
                      <p class="price">${item.price}€</p>
                      <p class="quantity-paragraph"><button class="${item.name}-minus-btn"><i class="fa-solid fa-minus"></i></button> <span class="quantity">${quantity}</span> <button class="${item.name}-plus-btn"><i class="fa-solid fa-plus"></i></button></p>
                      <p class="in-stock">${item.quantityInStock}</p>
                      <button class="add-to-cart-btn">Add To Cart</button>
                    </li>`
      shopOfferList.insertAdjacentHTML("afterbegin", html)
      document.querySelector(".quantity-paragraph").addEventListener("click", (event) => {
        if (event.target.classList.contains(`${item.name}-minus-btn`)) {
          console.log(this.findItem(event.target.closest("li")));
          this.findItem(event.target.closest("li"))
          quantity--
          this.renderOffer()
        }

        if (event.target.classList.contains(`${item.name}-plus-btn`)) {
          quantity++
          this.renderOffer()
        }
      })
    })
  }
}

class CartManager{
  constructor() {
    this.cart = []
  }

  addToCart(item) {
    this.cart.push(item)
  }

  removeFromCart(item) {
    return this.cart.splice(this.cart.indexOf(item), 1)
  }

  renderCart() {
    this.cart.forEach(item => {
      const html = `<li>
                      <p class="name-cart">${item.name}</p>
                      <p class="in-stock-cart">${item.quantity}</p>
                      <p class="price-cart">${item.price}€</p>
                      <button class="remove-from-cart-btn">Remove</button>
                    </li>`
      cartList.insertAdjacentHTML("afterbegin", html)
    })
  }
}

function incrementQuantityToBuy(quantity) {
  quantity++
}

function decrementQuantityToBuy(quantity) {
  quantity--
}



const cartManager = new CartManager();
const shopManager = new ShopManager();
const keyboard = new Item("Keyboard", 30, 20);
const mouse = new Item("Mouse", 10, 40);
const monitor = new Item("Monitor", 350, 10);
const mousepad = new Item("Mousepad", 5, 100);

shopManager.addToShop(keyboard)
shopManager.addToShop(mouse)
shopManager.addToShop(monitor)
shopManager.addToShop(mousepad)
shopManager.renderOffer()

// shopOfferList.addEventListener("click", (event) => {
//   console.log(event.target.classList.contains("plus-btn"))
//   if (event.target.classList.contains("plus-btn")) {

//   }
// })

