import React from "react";
import Dashboard from "./Dashboard/Dashboard";

function DashHolder(props) {
  return (
    <Dashboard
      deleteItem={props.deleteItem}
      inventory={props.inventory}
      getInventory={props.getInventory}
      getItem={props.getItem}
      toggleEdit={props.toggleEditTrue}
    />
  );
}

export default DashHolder;
