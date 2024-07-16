import './style.css'

// const itemName = document.querySelector(".item-name");
// const itemPrice = document.querySelector(".item-price");
// const itemQuantity = document.querySelector(".item-quantity");
// const itemStock = document.querySelector(".item-stock");
// const addToCartBtns = document.querySelector(".add-to-cart-btns")

const shopOfferList = document.querySelector(".shop-offer-list");
const cartList = document.querySelector(".cart-list");
const finance = document.querySelector(".finance");
const cartIcon = document.querySelector(".fa-cart-shopping");
const shoppingCart = document.querySelector(".shopping-cart")

class Item{
  constructor(name, price, quantityInStock, id = crypto.randomUUID()) {
    this.name = name
    this.price = price
    this.quantityInStock = quantityInStock
    this.quantityToBuy = 0
    this.id = id
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

  restartQuantityToBuy() {
    this.quantityToBuy = 0
  }

  removeFromStock(number) {
    this.quantityInStock -= number
  }

  addToStock(number) {
    this.quantityInStock += number
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
    return this.shop.find(item => item.id === itemId)
  }

  renderOffer() {
    shopOfferList.innerHTML = ""
    this.shop.forEach(item => {
      const html = `<li class="offer-item" data-id="${item.id}">
                      <p class="name a">${item.name}</p>
                      <p class="price a">${item.price}€</p>
                      <p class="quantity-paragraph a"><i class="fa-solid fa-minus ${item.name}-minus-btn minus-btn"></i> <span class="quantity">${item.quantityToBuy}</span> <i class="fa-solid fa-plus ${item.name}-plus-btn plus-btn"></i></p>
                      <p class="in-stock a">In Stock: ${item.quantityInStock}</p>
                      <button class="add-to-cart-btn a">Add To Cart</button>
                    </li>`
      shopOfferList.insertAdjacentHTML("afterbegin", html)

      // ocu stavit jedan eventListener na cijeli <li> ili jedan za + i - ,a jedan za add to cart????


    })
  }
}

class CartManager{
  constructor() {
    this.cart = []
  }

  addToCart(newItem) {
    const oldItem = this.cart.find(item => item.id === newItem.id)
    if (oldItem) {
      oldItem.quantityInStock += newItem.quantityInStock
      return
    }
    this.cart.push(newItem)
  }

  findItem(itemId) {
    return this.cart.find(item => item.id === itemId)
  }

  totalPrice() {
    let result = 0
    this.cart.forEach(item => {
      result += (item.price * item.quantityInStock)
    })
    return result
  }


  removeFromCart(itemId) {
    const item = this.cart.find(item => item.id === itemId)
    return this.cart.splice(this.cart.indexOf(item), 1)
  }

  renderCart() {
    cartList.innerHTML = ""
    this.cart.forEach(item => {
      const html = `<li class="cart-item" data-id="${item.id}">
                      <p class="name-cart a">${item.name}</p>
                      <p class="in-stock-cart a">${item.quantityInStock}</p>
                      <p class="price-cart a">${item.price}€</p>
                      <button class="remove-from-cart-btn a">Remove</button>
                    </li>`
      cartList.insertAdjacentHTML("afterbegin", html)
    })
  }
}

function displayFinance(total) {
  finance.innerHTML = `<span>Price: ${total - (total * 0.2)}€</span> <span>Taxes: 20% </span> <span> Total: ${total}€ </span>`
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
cartManager.renderCart()
displayFinance(cartManager.totalPrice())



cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const itemInShop = shopManager.findItem(event.target.closest("li").getAttribute("data-id"))
    const itemInCart = cartManager.findItem(itemInShop.id)
    itemInShop.addToStock(itemInCart.quantityInStock)
    cartManager.removeFromCart(event.target.closest("li").getAttribute("data-id"))
    cartManager.renderCart()
    shopManager.renderOffer()
    displayFinance(cartManager.totalPrice())
  }
})

shopOfferList.addEventListener("click", (event) => {

  const item = shopManager.findItem(event.target.closest("li").getAttribute("data-id"))
  if (event.target.classList.contains(`minus-btn`) && item.quantityToBuy > 0) {
    item.decrementQuantityToBuy()
    shopManager.renderOffer()
  }

  if (event.target.classList.contains(`plus-btn`) && item.quantityInStock >= (item.quantityToBuy + 1)) {
    item.incrementQuantityToBuy()
    shopManager.renderOffer()
  }

  if (event.target.classList.contains("add-to-cart-btn") && item.quantityToBuy > 0) {
    const hold = {...item}
    const boughtItem = new Item(hold.name, hold.price, hold.quantityToBuy, hold.id)
    item.restartQuantityToBuy()
    item.removeFromStock(boughtItem.quantityInStock)
    cartManager.addToCart(boughtItem)
    cartManager.renderCart()
    shopManager.renderOffer()
    displayFinance(cartManager.totalPrice())
  }
})

cartIcon.addEventListener("click", () => {
  console.log(shoppingCart)
  shoppingCart.style.transition = "0.5s"
  shoppingCart.style.transform = "translateX(510px)"
})
