import React from "react";
import Product from "../Product/Product";

function Dashboard(props) {
  let inventoryDisplay = props.inventory.map(el => {
    return (
      <div>
        <Product
          getInventory={props.getInventory}
          deleteItem={props.deleteItem}
          getItem={props.getItem}
          item={el}
          toggleEdit={props.toggleEdit}
        />
      </div>
    );
  });
  // let inventoryDisplay = <div>hi</div>
  // if (props.inventory) {
  //   inventoryDisplay = props.inventory.map(el => {
  //     return (
  //       <div>
  //         <Product
  //           getInventory={props.getInventory}
  //           deleteItem={props.deleteItem}
  //           getItem={props.getItem}
  //           item={el}
  //           toggleEdit={props.toggleEdit}
  //         />
  //       </div>
  //     );
  //   });
  return (
    <div>
      <div>hi</div>
      {inventoryDisplay}
    </div>
  );
}

export default Dashboard;
