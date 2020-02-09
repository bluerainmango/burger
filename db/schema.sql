DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- burgers table
CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    changed_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW()
);

-- burger character table
DELETE FROM burger_char;

CREATE TABLE burger_char (
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_type BOOLEAN
);

