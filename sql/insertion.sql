INSERT INTO users (
  first_name, email, password, address, role
) VALUES (
  'Nati', 'bvhbcvjewb', '12345', 'bvyjgvde', 'client'
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