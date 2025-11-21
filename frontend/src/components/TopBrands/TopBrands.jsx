import React, { useContext } from "react";
import "./TopBrands.css";
import { StoreContext } from "../../context/StoreContext";


const TopBrands = () => {
  const { brand, addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  // Group items by brand name
  const groupedBrands = brand.reduce((acc, item) => {
    if (!acc[item.brand]) acc[item.brand] = [];
    acc[item.brand].push(item);
    return acc;
  }, {});

  return (
    <div className="top-brands">
      <div className="top-brands-img-container">
        <h2>Top Brands</h2>
      {Object.keys(groupedBrands).map((brandName) => (
        <div key={brandName} className="brand-section">
          <h3>{brandName.toUpperCase()}</h3>
          <div className="brand-items">
            {groupedBrands[brandName].map((item) => (
              <div className="brand-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item._id)}>Add to Cart</button>
                {cartItems[item._id] > 0 && (
                  <button onClick={() => removeFromCart(item._id)}>Remove</button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
      
    </div>
      
    
  );
};

export default TopBrands;
