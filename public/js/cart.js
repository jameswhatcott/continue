document.querySelector('#add-to-cart-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const gameId = event.target.querySelector('input[name="gameId"]').value;
    const quantity = event.target.querySelector('input[name="quantity"]').value;
  
    const response = await fetch('/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameId, quantity }),
    });
  
    if (response.ok) {
      alert('Item added to cart!');
      // Optionally redirect or update the cart UI
    } else {
      alert('Failed to add item to cart.');
    }
  });
  