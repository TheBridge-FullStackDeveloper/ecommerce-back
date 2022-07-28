DROP TABLE IF EXISTS orders; 
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS sells; 
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TYPE IF EXISTS roles;
DROP EXTENSION IF EXISTS "uuid-ossp";
CREATE TYPE roles AS ENUM (
  'client', 'client_vip', 'vendor'
);
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(20) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  address VARCHAR(70) NOT NULL,
  role roles NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  ref TEXT NOT NULL UNIQUE,
  name VARCHAR(20) NOT NULL,
  price NUMERIC(1000, 2) NOT NULL,
  stock INTEGER NOT NULL,
  img TEXT NOT NULL,
  details VARCHAR(500) NOT NULL,
  rate SMALLINT,
  category_id uuid REFERENCES categories
    ON UPDATE CASCADE
    ON DELETE SET NULL,
  CONSTRAINT valid_rate
      CHECK (rate >= 0 AND rate <= 5)
);

CREATE TABLE IF NOT EXISTS sells (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  ref TEXT NOT NULL UNIQUE,
  user_id uuid REFERENCES users
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  delivery_date DATE NOT NULL,
  receiving_date DATE NOT NULL
);
CREATE TABLE IF NOT EXISTS orders (
  quantity INTEGER NOT NULL DEFAULT 1,
  sell_id uuid REFERENCES sells
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  product_id uuid REFERENCES products
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT orders_id PRIMARY KEY (sell_id, product_id)
);

CREATE TABLE IF NOT EXISTS reviews (
  rate INTEGER NOT NULL,
  review TEXT NOT NULL,
  user_id uuid REFERENCES users,
  product_id uuid REFERENCES products,
  CONSTRAINT valid_rate
      CHECK (rate >= 0 AND rate <= 5),
  CONSTRAINT reviews_id PRIMARY KEY (user_id, product_id)
);
