<script>
    // ... (tes fonctions openModal et closeModal)

    let cart = [];
    let total = 0;

    function addToCart(productName, price) {
        cart.push({ name: productName, price: price });
        total += price;
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartList = document.getElementById("cart-list");
        const totalElement = document.getElementById("cart-total");

        // Nettoie le panier affiché
        cartList.innerHTML = "";

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price.toFixed(2)} €`;
            cartList.appendChild(li);
        });

        totalElement.textContent = total.toFixed(2);
    }
</script>
