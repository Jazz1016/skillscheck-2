import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      canEdit: false,
      item: {
        product_id: 0,
        product_name: "",
        price: 0,
        img_url: ""
      }
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount = () => {
    this.getInventory();
  };

  getInventory = () => {
    axios.get(`/api/product`).then(response => {
      // console.log(response.data);
      this.setState({ inventory: response.data });
    });
  };

  addToInventory = newItem => {
    // console.log(newItem);
    axios.post(`/api/product`, { newItem }).then(() => {
      this.getInventory();
    });
  };
  deleteItem(id) {
    axios.delete(`/api/product/${id}`).then(() => {
      this.getInventory();
    });
  }
  getItem = id => {
    // console.log(id);
    axios.get(`/api/product/${id}`).then(response => {
      this.setState({ item: response.data[0] });
    });
  };
  toggleEditTrue = () => {
    this.setState({ canEdit: true });
  };
  toggleEditFalse = () => {
    this.setState({ canEdit: false });
  };
  editItem = (id, newItem) => {
    axios.put(`/api/product/${id}`, { newItem }).then(() => {
      this.getInventory();
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Dashboard
                  {...props}
                  deleteItem={this.deleteItem}
                  inventory={this.state.inventory}
                  getInventory={this.getInventory}
                  getItem={this.getItem}
                  toggleEdit={this.toggleEditTrue}
                />
              )}
            />
            <Route
              path="/form"
              render={props => (
                <Form
                  {...props}
                  addToInventory={this.addToInventory}
                  editItem={this.editItem}
                  item={this.state.item}
                  product_id={this.state.item.product_id}
                  product_name={this.state.item.product_name}
                  price={this.state.item.price}
                  img_url={this.state.item.img_url}
                  canEdit={this.state.canEdit}
                  toggleEditTrue={this.toggleEditTrue}
                  toggleEditFalse={this.toggleEditFalse}
                  canEdit={this.state.canEdit}
                />
              )}
            />
          </Switch>
          {/* <Form
          addToInventory={this.addToInventory}
          editItem={this.editItem}
          item={this.state.item}
          product_id={this.state.item.product_id}
          product_name={this.state.item.product_name}
          price={this.state.item.price}
          img_url={this.state.item.img_url}
          canEdit={this.state.canEdit}
          toggleEditTrue={this.toggleEditTrue}
          toggleEditFalse={this.toggleEditFalse}
          canEdit={this.state.canEdit}
        />
        <Dashboard /> */}
        </div>
      </div>
    );
  }
}

export default Home;
