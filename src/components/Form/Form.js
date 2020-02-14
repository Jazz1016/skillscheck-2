import React from "react";
import { render } from "@testing-library/react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
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

  clearInputs = () => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <div>
        {console.log(this.props.item)}
        Form.js
        <p>Image URL</p>
        <input
          value={this.props.img_url}
          onChange={e => this.handleImgChange(e.target.value)}
        />
        <p>Product Name</p>
        <input
          value={this.props.product_name}
          onChange={e => this.handleChange(e.target.value)}
        />
        <p>Price:</p>
        <input value={this.props.price} type="number" />
        <section>
          <button onClick={this.clearInputs}>Cancel</button>
          {this.props.canEdit ? (
            <button
              onClick={() => {
                this.props.editItem(this.props.item.product_id);
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
