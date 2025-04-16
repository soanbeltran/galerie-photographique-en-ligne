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
// Animation au scroll
const sections = document.querySelectorAll('.section');

function revealSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
const clickSound = document.getElementById('click-sound');

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
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
// Ouverture de la modale image
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
