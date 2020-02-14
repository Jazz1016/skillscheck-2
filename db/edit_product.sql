UPDATE product
SET product_name=$2, price=$3, img_url=$4
WHERE product_id = $1;