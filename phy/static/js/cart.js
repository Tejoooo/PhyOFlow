// Function to increment quantity
function incrementQuantity(btn) {
    var quantityElem = btn.parentNode.querySelector('.quantity');
    var quantity = parseInt(quantityElem.textContent);
    quantity++;
    quantityElem.textContent = quantity;
  
    updateTotalPrice(btn);
  }
  
  // Function to decrement quantity
  function decrementQuantity(btn) {
    var quantityElem = btn.parentNode.querySelector('.quantity');
    var quantity = parseInt(quantityElem.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElem.textContent = quantity;
    }
  
    updateTotalPrice(btn);
  }
  
  // Function to update the total price
  function updateTotalPrice(btn) {
    var quantityElem = btn.parentNode.querySelector('.quantity');
    var quantity = parseInt(quantityElem.textContent);
  
    var priceElem = btn.closest('.row').querySelector('.price');
    var price = parseFloat(priceElem.textContent);
  
    var totalElem = btn.closest('.row').querySelector('.total-price');
    var totalPrice = quantity * price;
    totalElem.textContent = '₹' + totalPrice.toFixed(2);
  }
  
  // Add event listeners to the increment and decrement buttons
  var incrementBtns = document.querySelectorAll('.increment-btn');
  var decrementBtns = document.querySelectorAll('.decrement-btn');
  
  incrementBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      incrementQuantity(this);
    });
  });
  
  decrementBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      decrementQuantity(this);
    });
  });
  