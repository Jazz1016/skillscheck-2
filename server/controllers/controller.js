module.exports = {
  getproducts: async (req, res) => {
    const db = req.app.get("db");

    db.get_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
      });
  },
  addProduct: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.body);
    const { product_name, price, img_url } = req.body.newItem;
    db.add_product([product_name, +price, img_url])
      .then(() =>
        // console.log(product)
        res.sendStatus(200)
      )
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },
  getOneItem: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },
  editProduct: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.params);
    const { id } = req.params;
    // console.log(req.body);
    const { product_name, price, img_url } = req.body.newItem;
    db.edit_product([id, product_name, price, img_url])
      .then(product => {
        // console.log(product);
        res.status(200).send(product);
      })
      .catch(() => console.log("editProduct error"));

    // dbInstance
    //   .update_product([params.id, ])
    //   .then(() => res.sendStatus(200))
    //   .catch(err => {
    //     res.status(500).send({
    //       errorMessage:
    //         "Oops! Something went wrong. Our engineers have been informed!"
    //     });
    //     console.log(err);
    //   });
    //   });
    // console.log("htujeh");
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.params);
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  }
};
