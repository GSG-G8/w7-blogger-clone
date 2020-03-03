BEGIN;

DROP TABLE IF EXISTS post, users CASCADE;

CREATE TABLE post (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(255) NOT NULL,
	image VARCHAR(255) NOT NULL,
	description TEXT NOT NULL,
  user_id INTEGER 

);

CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	username VARCHAR(255) NOT NULL,
	password VARCHAR(30) NOT NULL,
	email VARCHAR(255) NOT NULL
);


INSERT INTO post (name, image, description ) VALUES
    ('post title name 1', 'https://via.placeholder.com/300','lorem ipsum lorem ipsum'),
    ('post title name 2', 'https://via.placeholder.com/300','lorem ipsum lorem ipsum'),
    ('post title name 3', 'https://via.placeholder.com/300','lorem ipsum lorem ipsum'),
    ('post title name 4', 'https://via.placeholder.com/300','lorem ipsum lorem ipsum');

COMMIT;


