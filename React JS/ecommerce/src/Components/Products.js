import React, { useEffect, useState } from "react";
import Product from "./Item";

const Products = (props) => {
  const category = props.category;
  const [items, setItems] = useState([]);

  const fetchItems = async (category) => {
    props.setProgress(10);
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : `https://fakestoreapi.com/products`;

    let response = await fetch(url);
    props.setProgress(40);
    const data = await response.json();
    props.setProgress(70);
    setItems(data);
    props.setProgress(100);
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchItems(category);
  },[category]);

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
