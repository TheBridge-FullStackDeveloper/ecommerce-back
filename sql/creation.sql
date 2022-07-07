-- borrado tabla "orders"
DROP TABLE IF EXISTS orders; 

-- creacion tabla "orders"; primary key orderID
CREATE TABLE IF NOT EXISTS orders (
  orderId SERIAL PRIMARY KEY, 
  quantity INT NOT NULL,
  userId INT FOREIGN KEY REFERENCES users (userId), --referencia la tabla "orders" con la clave de la tabla "users"
  productId INT FOREIGN KEY REFERENCES products (productId), --referencia la tabla "orders" con la clave de la tabla "products"
);

-- borrado tabla "users"
DROP TABLE IF EXISTS users;

-- creacion tabla "users"; primary key userId
CREATE TABLE IF NOT EXISTS users (
  userId SERIAL PRIMARY KEY,
  firstName TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  address TEXT NOT NULL,
  role TEXT NOT NULL,
);

-- borrado tabla "products"
DROP TABLE IF EXISTS products;

-- creacion tabla "products"; primary key productId
CREATE TABLE IF NOT EXISTS products (
  productId SERIAL PRIMARY KEY,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  price INT NOT NULL,
  quantity INT NOT NULL,
  img TEXT NOT NULL,
  details TEXT NOT NULL,
  rate TEXT NOT NULL,
);