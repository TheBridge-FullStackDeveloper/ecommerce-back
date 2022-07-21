DELETE FROM users
WHERE first_name = 'Nati';

DELETE FROM categories
WHERE name = 'hogar';

DELETE FROM products
WHERE ref = 'ygu';

DELETE FROM orders
WHERE product_id = (SELECT id FROM products WHERE name = 'papel');

DELETE FROM sells
WHERE ref = 'Nati';

INSERT INTO users (
  first_name, email, password, address, role
) VALUES (
  'Nati', 'bvhbcvjewb', '12345', 'bvyjgvde', 'client'
);

INSERT INTO sells (
  ref, user_id, delivery_date, receiving_date
) VALUES (
  'Nati', (SELECT id FROM users WHERE first_name= 'Nati'), '2022-12-12', '2022-12-12'
);

INSERT INTO categories (
  name
) VALUES (
  'hogar'
);

INSERT INTO products (
    ref, name, price, stock, img, details, rate, category_id
) VALUES (
    'ygu', 'papel', 10, 25, 'bhwbdhj', 'bvhydbveukyv', 2, (SELECT id FROM categories WHERE name = 'hogar') 
);

INSERT INTO orders (
  quantity, user_id, product_id 
) VALUES (
  1, (SELECT id FROM users WHERE first_name= 'Nati'), (SELECT id FROM products WHERE name = 'papel')
);