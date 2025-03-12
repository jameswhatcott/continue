// helpers.js
module.exports = {
  multiply: (price, quantity) => {
    return (price * quantity).toFixed(2);
  },
  calculateTotal: (cartItems) => {
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.gamesConsole.price * item.quantity);
    }, 0);
    return total.toFixed(2);
  }
};