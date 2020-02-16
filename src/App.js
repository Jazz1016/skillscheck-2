import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Home from "./Home";
import axios from "axios";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import routes from "./routes";

class App extends React.Component {
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
    // this.getInventory = this.getInventory.bind(this);
  }

  // componentDidMount = () => {
  //   this.getInventory();
  // };

  // getInventory() {
  //   axios.get(`/api/product`).then(response => {
  //     // console.log(response.data);
  //     this.setState({ inventory: response.data });
  //   });
  // }

  // addToInventory = newItem => {
  //   // console.log(newItem);
  //   axios.post(`/api/product`, { newItem }).then(() => {
  //     this.getInventory();
  //   });
  // };
  // deleteItem = id => {
  //   axios.delete(`/api/product/${id}`).then(() => {
  //     this.getInventory();
  //   });
  // };
  // getItem = id => {
  //   // console.log(id);
  //   axios.get(`/api/product/${id}`).then(response => {
  //     this.setState({ item: response.data[0] });
  //   });
  // };
  // toggleEditTrue = () => {
  //   this.setState({ canEdit: true });
  // };
  // toggleEditFalse = () => {
  //   this.setState({ canEdit: false });
  // };
  // editItem = (id, newItem) => {
  //   axios.put(`/api/product/${id}`, { newItem }).then(() => {
  //     this.getInventory();
  //   });
  // };

  render() {
    return (
      <HashRouter>
        <Home />
      </HashRouter>
    );
  }
}

export default App;
