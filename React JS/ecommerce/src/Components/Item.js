import React from "react";

const Product = (props) => {
  const { title, image, description, price } = props;
  const truncatedDescription =
    description.split(" ").length > 20
      ? description.split(" ").slice(0, 20).join(" ") + "..."
      : description;
  return (
    <div className="my-3 mx-3 p-4">
      <div className="card h-100" style={{ width: "18rem" }}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text"
            style={{
              height: "80px",
              overflow: "hidden",
              // textOverflow: "ellipsis",
            }}
          >
            {truncatedDescription}
          </p>
          <h4 className="card-text">&#36; {price}</h4>
          <a href="/" className="btn btn-dark">
           Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
