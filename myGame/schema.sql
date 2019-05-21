 DROP DATABASE IF EXISTS myGame;
CREATE DATABASE myGame;

USE myGame;

CREATE TABLE player(
  id int NOT NULL AUTO_INCREMENT,
  accountName varchar(16) NOT NULL UNIQUE,
  password varchar(16) NOT NULL,
  PRIMARY KEY (id)
)ENGINE = InnoDB;


CREATE TABLE hero(
  hero_id int NOT NULL AUTO_INCREMENT,
  heroName varchar(16) NOT NULL UNIQUE,
  role varchar(16) NOT NULL,
  level int NOT NULL DEFAULT 1,
  account_id int NOT NULL,
  FOREIGN KEY (account_id) REFERENCES player(id) ON DELETE CASCADE,
  PRIMARY KEY(hero_id)
)ENGINE = InnoDB;

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.
*/








