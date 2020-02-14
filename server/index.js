require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controllers/controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get(`/api/product`, ctrl.getproducts);
app.get(`/api/product/:id`, ctrl.getOneItem);
app.post(`/api/product`, ctrl.addProduct);
app.put(`/api/product/:id`, ctrl.editProduct);
app.delete(`/api/product/:id`, ctrl.deleteProduct);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("|--database connected--|");
  app.listen(SERVER_PORT, () =>
    console.log(`|---SERVER ON ${SERVER_PORT}---|`)
  );
});
