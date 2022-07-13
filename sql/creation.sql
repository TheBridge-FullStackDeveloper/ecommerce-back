DROP TABLE IF EXISTS orders; 
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP EXTENSION IF EXISTS "uuid-ossp";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  address TEXT NOT NULL,
  role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  ref TEXT NOT NULL UNIQUE,
  name VARCHAR(20) NOT NULL,
  price NUMERIC(1000, 2) NOT NULL,
  stock INTEGER NOT NULL,
  img TEXT NOT NULL,
  details VARCHAR(500) NOT NULL,
  rate SMALLINT NOT NULL,
  category_id uuid REFERENCES categories,
  constraint valid_rate
      check (rate >= 0 AND rate <= 5)
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
  quantity INTEGER NOT NULL,
  user_id uuid REFERENCES users,
  product_id uuid REFERENCES products
);