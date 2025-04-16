// Panier
let cart = [];

function addToCart(itemName) {
  cart.push(itemName);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += 1;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item} 
      <span style="cursor: pointer; color: red;" onclick="removeItem(${index})">✖</span>
    `;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function clearCart() {
  cart = [];
  updateCartDisplay();
}

function openPayment() {
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }
  document.getElementById("payment-modal").style.display = "flex";
}

function closePayment() {
  document.getElementById("payment-modal").style.display = "none";
}

function processPayment(event) {
  event.preventDefault();
  alert("Merci pour votre achat fictif !");
  closePayment();
  clearCart();
}
