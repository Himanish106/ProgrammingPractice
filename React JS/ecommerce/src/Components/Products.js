import React, { useEffect, useState } from "react";
import Product from "./Item";

const Products = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const url = "https://fakestoreapi.com/products";
    let response = await fetch(url);
    const data = await response.json();
    setItems(data);
    console.log(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <h2 className="text-center" style={{ marginTop: "20px" }}>
        ProKart - Order Products at Cheapest Price
      </h2>
      <div className="container">
        <div className="row">
          {items.map((element) => (
            <div className="col-md-4 " key={element.id}>
              <Product
                title={element.title}
                image={element.image}
                description={element.description}
                price={element.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
