let cart = [];

function addToCart(itemName) {
  cart.push(itemName);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item + " - 1€";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.background = "transparent";
    removeBtn.style.border = "none";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);

    total += 1;
  });

  cartTotal.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
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
  alert("Paiement fictif effectué avec succès !");
  closePayment();
  clearCart();
}
