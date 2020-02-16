import React from "react";
import { render } from "@testing-library/react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ``,
      price: ``,
      imgUrl: ``
    };
  }

  handleChange = val => {
    // console.log(val);
    this.setState({ name: val });
  };

  handleImgChange = val => {
    // console.log(val);
    this.setState({ imgUrl: val });
  };

  handleNumChange = val => {
    // console.log(val);
    this.setState({ price: val });
  };

  editText = () => {
    if (this.props.canEdit === true) {
      this.setState({
        name: this.props.product_name,
        price: this.props.price,
        imgUrl: this.props.img_url
      });
    }
  };

  componentDidUpdate = previousProps => {
    if (previousProps != this.props) {
      this.editText();
    }
  };

  render() {
    return (
      <div>
        Form.js
        <p>Image URL:</p>
        <input
          value={this.state.imgUrl}
          // defaultValue={this.props.img_url}
          onChange={e => this.handleImgChange(e.target.value)}
        />
        <p>Product Name:</p>
        <input
          value={this.state.name}
          // defaultValue={this.props.product_name}
          onChange={e => this.handleChange(e.target.value)}
        />
        <p>Price:</p>
        <input
          type="number"
          value={this.state.price}
          // defaultValue={this.props.price}
          onChange={e => this.handleNumChange(e.target.value)}
        />
        <section>
          <button
            onClick={() => {
              this.setInputs();
              this.props.toggleEditFalse();
            }}
          >
            Cancel
          </button>
          {this.props.canEdit ? (
            <button
              onClick={() => {
                this.props.editItem(this.props.product_id, {
                  product_name: this.state.name,
                  price: this.state.price,
                  img_url: this.state.imgUrl
                });
                // this.props.toggleEdit();
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
