import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div>
      <img src={`${props.item.img_url}`} alt="product-image" />
      <section>{props.item.product_name}</section>
      <section>
        {props.item.price}
        <br />
        {props.item.product_id}
      </section>
      <section>
        <Link to="/form">
          <button
            onClick={() => {
              props.getItem(props.item.product_id);
              props.toggleEdit();
            }}
          >
            Edit
          </button>
        </Link>

        <button onClick={() => props.deleteItem(props.item.product_id)}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default Product;
