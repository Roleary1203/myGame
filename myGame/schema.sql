
CREATE DATABASE myGame;

USE myGame;

CREATE TABLE characters(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(16) NOT NULL,
  role varchar(16) NOT NULL,
  level int NOT NULL DEFAULT 1,
  PRIMARY KEY(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 DROP DATABASE [IF EXISTS] myGame;
*/

 