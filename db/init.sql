CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(40),
    price INTEGER,
    img_url TEXT
)

INSERT INTO product (
    product_name,
    price,
    img_url 
) VALUES ('helicopter', 3000, 'imgurl')