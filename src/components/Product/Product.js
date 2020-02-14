import React from "react";
import axios from "axios";

function Product(props) {
  return (
    <div>
      <img src={`${props.item.img_url}`} alt="product-image" />
      <section>{props.item.product_name}</section>
      <section>
        {props.item.price}
        {props.item.product_id}
      </section>
      <section>
        <button
          onClick={() => {
            props.getItem(props.item.product_id);
            props.toggleEdit();
          }}
        >
          Edit
        </button>
        <button onClick={() => props.deleteItem(props.item.product_id)}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default Product;
