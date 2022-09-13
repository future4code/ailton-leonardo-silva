CREATE TABLE labecommerce_users (
	id VARCHAR (255) NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE labecommerce_products (
	id VARCHAR (255) NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT(6,2),
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE labecommerce_purchases (
	id VARCHAR (255) NOT NULL UNIQUE PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
		FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
    product_id VARCHAR(255) NOT NULL,
		FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
	quantity INT (4),
    total_price FLOAT(6,2)
);

SELECT * FROM labecommerce_users;

SELECT * FROM labecommerce_products;

SELECT * FROM labecommerce_purchases;

