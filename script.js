let cart = [];
let total = 0;

function addToCart(foodName, price) {

    cart.push({
        name: foodName,
        price: price
    });

    total = total + price;

    displayCart();
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");
    let totalDisplay = document.getElementById("total");

    cartItems.innerHTML = "";

    cart.forEach(function(item) {

        let itemElement = document.createElement("p");

        itemElement.textContent =
            item.name + " - ₦" + item.price;

        cartItems.appendChild(itemElement);
    });

    totalDisplay.textContent = total;
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Please select some food first.");
        return;
    }

    alert("Your order has been placed successfully! 🍴");

    cart = [];
    total = 0;

    displayCart();
}