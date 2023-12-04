// // src/components/ProductList/ProductList.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../actions/cartActions';
// import products from './Products'
// const ProductList = () => {
//   const dispatch = useDispatch();



//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item));
//   };

//   return (
//     <div className='product-container'>
//       <h2>Product List</h2>
//       <div className='card-container'>
//         {products.map((product) => (
//           <div key={product.id} className='product-card'>
//             <img src={product.imageUrl} alt={product.name} className='product-image' />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// export default ProductList;


// src/components/ProductList/ProductList.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import products from './Products';

const ProductList = () => {
  const dispatch = useDispatch();
  const [cartMessage, setCartMessage] = useState('');

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setCartMessage(`${product.name} has been added to the cart!`);
  };

  useEffect(() => {
    if (cartMessage) {
      const timeoutId = setTimeout(() => {
        setCartMessage('');
      }, 3000); // Display for 3 seconds

      return () => clearTimeout(timeoutId);
    }
  }, [cartMessage]);

  return (
    <div className='product-container'>
      <h2>Product List</h2>
      <div className='card-container'>
        {products.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.imageUrl} alt={product.name} className='product-image' />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {cartMessage && (
        <div className="dialog-box">
          <div className="alert">{cartMessage}</div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
