// // src/components/Cart/Cart.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../../actions/cartActions';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Shopping Cart</h2>
//       <ul style={styles.list}>
//         {cartItems.map((item) => (
//           <li key={item.id} style={styles.listItem}>
//             {item.name} - ${item.price}
//             <button style={styles.button} onClick={() => handleRemoveFromCart(item.id)}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '20px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: 0,
//   },
//   listItem: {
//     marginBottom: '10px',
//   },
//   button: {
//     marginLeft: '10px',
//     padding: '8px',
//     fontSize: '14px',
//   },
// };

// export default Cart;

// src/components/Cart/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className='product-container'>
    <h2>Shopping Cart</h2>
    <div className='card-container'>
      
      {cartItems.length === 0 ? 
        <p>Your cart is empty.</p>
       : 
          
            cartItems.map((item) => (
            <div key={item.id} className='product-card'>
            <img src={item.imageUrl} alt={item.name} className='product-image' />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button  onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
          </div>
          ))
      }
    </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  button: {
    marginLeft: '10px',
    padding: '8px',
    fontSize: '14px',
  },
};

export default Cart;
