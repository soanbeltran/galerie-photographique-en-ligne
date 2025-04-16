// Panier
let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerText = item + " - 1€ ";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => {
      cart.splice(i, 1);
      updateCart();
    };
    li.appendChild(removeBtn);
    list.appendChild(li);
    sum += 1;
  });
  total.innerText = sum;
}

function clearCart() {
  cart = [];
  updateCart();
}

function openPayment() {
  document.getElementById("payment-modal").style.display = "flex";
}

function closePayment() {
  document.getElementById("payment-modal").style.display = "none";
}

function processPayment(e) {
  e.preventDefault();
  alert("Paiement fictif validé !");
  clearCart();
  closePayment();
}

// Effet de lumière (suivi souris)
function handleLightEffect(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  e.currentTarget.style.setProperty('--x', `${x}%`);
  e.currentTarget.style.setProperty('--y', `${y}%`);
}

document.querySelectorAll('.photo-card, button').forEach(el => {
  el.addEventListener('mousemove', handleLightEffect);
});

// Modale image plein écran
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');

document.querySelectorAll('.photo-card img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

function closeImageModal() {
  modal.style.display = 'none';
}
