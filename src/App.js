import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      canEdit: false,
      item: {
        product_name: "",
        price: 0,
        img_url: ""
      }
    };
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount = () => {
    this.getInventory();
  };

  getInventory() {
    axios.get(`/api/product`).then(response => {
      // console.log(response.data);
      this.setState({ inventory: response.data });
    });
  }

  addToInventory = newItem => {
    console.log(newItem);
    axios.post(`/api/product`, { newItem }).then(() => {
      this.getInventory();
    });
  };
  deleteItem = id => {
    axios.delete(`/api/product/${id}`).then(() => {
      this.getInventory();
    });
  };
  getItem = id => {
    // console.log(id);
    axios.get(`/api/product/${id}`).then(response => {
      this.setState({ item: response.data });
    });
  };
  toggleEdit = () => {
    this.setState({ canEdit: !this.state.canEdit });
  };
  toggleEditTrue = () => {
    this.setState({ canEdit: true });
  };
  editItem = (id, newItem) => {
    axios.put(`/api/product/${id}`, { newItem });
  };

  render() {
    const { product_name, price, img_url } = this.state.item;
    console.log(this.state.item);
    return (
      <div className="App">
        <Header />
        <Form
          addToInventory={this.addToInventory}
          toggleEdit={this.toggleEdit}
          editItem={this.editItem}
          item={this.state.item}
          product_name={product_name}
          price={price}
          img_url={img_url}
          canEdit={this.state.canEdit}
        />
        <Dashboard
          deleteItem={this.deleteItem}
          inventory={this.state.inventory}
          getInventory={this.getInventory}
          getItem={this.getItem}
          toggleEdit={this.toggleEditTrue}
        />
      </div>
    );
  }
}

export default App;
