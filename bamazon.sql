-- create database (& drop)
DROP DATABASE IF EXISTS  bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

-- Create "products" table which will contain store inventory
CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT  default 0,
PRIMARY KEY (item_id)
);

-- Insert data to table
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Echo Dot', 'Electronics', 39.99, 1000),
('Egg Cooker', 'Appliances', 18.50, 500),
('The Power of Habit', 'Books', 14.95, 250),
('Yoga Mat', 'Exersice & Fitness', 27.79, 500),
('CeraVe Facial Moisturizing Lotion', 'Cosmetics', 12.25, 500),
('Olaplex Hair Perfector No 3', 'Cosmetics', 28.00, 500),
('Olaplex No.5 Conditioner', 'Cosmetics', 28.00, 500),
('Olaplex No.4 Shampoo', 'Cosmetics', 28.00, 500),
('Foor Whom the Bell Tolls', 'Books', 21.80, 250),
('BIT Smart Watch', 'Exercise & Fitness', 54.59, 500)