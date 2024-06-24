import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, addItem, removeItem } = useContext(CartContext);

  const handleCheckout = () => {
    // 1. Validar que el carrito no esté vacío
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items to your cart before checking out.');
      return;
    }

    // 2. Calcular el total de la compra
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    // 3. Mostrar un resumen de la compra al usuario
    const confirmation = window.confirm(`
      Please confirm your order:
      
      Items: ${cartItems.map(item => item.name).join(', ')}
      
      Total: $${total.toFixed(2)}
      
      Click "OK" to proceed with payment.
    `);

    // 4. Si el usuario confirma, redirigir a la página de pago
    if (confirmation) {
      // Aquí puedes redirigir al usuario a la página de pago
      // o llamar a una función que maneje el proceso de pago
      window.alert('Thank you for your order! You will be redirected to the payment page.');
      // Aquí puedes limpiar el carrito o realizar otras acciones necesarias
    }
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - {item.price}</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;