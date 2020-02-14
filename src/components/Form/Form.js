import React from "react";
import { render } from "@testing-library/react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ``,
      price: ``,
      imgUrl: ""
    };
    this.baseState = this.state;
  }

  handleChange = val => {
    // console.log(val);
    this.setState({ name: val });
  };

  handleImgChange = val => {
    // console.log(val);
    this.setState({ imgUrl: val });
  };

  setInputs = (name, price, imgUrl) => {
    this.setState({ name: `${this.props.product_name}`, price, imgUrl });
  };

  clearInputs = () => {
    this.setState(this.baseState);
  };

  render() {
    console.log(this.props.product_name);
    // const needEls = this.props.item.map(el => {
    //   return `${el.product_name}`;
    // });
    return (
      <div>
        Form.js
        <p>Image URL</p>
        <input
          value={this.state.img_url}
          onChange={e => this.handleImgChange(e.target.value)}
        />
        <p>Product Name</p>
        <input
          value={this.state.name}
          onChange={e => this.handleChange(e.target.value)}
        />
        <p>Price:</p>
        <input value={this.state.price} type="number" />
        <section>
          <button onClick={this.clearInputs}>Cancel</button>
          {this.props.canEdit ? (
            <button
              onClick={() => {
                this.props.editItem(this.props.item.product_id, {
                  product_name: this.state.name,
                  price: this.state.price,
                  img_url: this.state.imgUrl
                });
                this.props.toggleEdit();
              }}
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() =>
                this.props.addToInventory({
                  product_name: this.state.name,
                  price: this.state.price,
                  img_url: this.state.imgUrl
                })
              }
            >
              Add to Inventory
            </button>
          )}
        </section>
      </div>
    );
  }
}

export default Form;
