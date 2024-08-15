module.exports = {
    multiply: (price, quantity) => {
      return (price * quantity).toFixed(2);
    },
    calculateTotal: (cart) => {
      let total = 0;
      cart.forEach(item => {
        total += item.price_at_time * item.quantity;
      });
      return total.toFixed(2);
    }
  };
  