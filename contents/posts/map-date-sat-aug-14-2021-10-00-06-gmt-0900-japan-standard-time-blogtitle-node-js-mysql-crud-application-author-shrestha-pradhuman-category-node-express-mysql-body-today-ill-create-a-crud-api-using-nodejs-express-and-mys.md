---
blogTitle: Node JS,  MySQL CRUD Application
author: Shrestha Pradhuman
category: Node, Express, MySQL
date: 2021-08-14T01:00:06.580Z
blogImage: https://www.tutorialkart.com/wp-content/uploads/2017/09/nodejs-mysql.png
---
I'll create a CRUD API using NodeJS, Express, And MySQL. So, without wasting time let's start.

### Prerequisites and required applications

NodeJS**:** open-source, cross-platform runtime environment for developing server-side and networking applications. One should have a basic understanding of NodeJS.
ExpressJS**:**  web frameworks for NodeJS. Built on top NodeJS  HTTP module, which helps for routing, middleware, view system, etc.
MySQL**:**  open-source relational database management system.
IDE (integrated development environment): I am using visual studio code in my case mine. You can choose whatever you like.

let's start the project. create a project directory and initialize the project.

```
$ mkdir crud && cd crud
$ npm init -y
```

It will create the package.json file inside the folder. Now I will install ExpressJS, nodemon, and mysql.

```
$ npm install express mysql nodemon --save

/** if you use yarn then run below command*/
                    
$ yarn add express mysql nodemon
```

After finishing the installation of all dependencies. we will make the entry point for my crud application. for this, I will first create index.js inside the project directory.

```
$ touch index.js
```

After creating an index.js file, we will write the code.

```
const express = require("express");
/** port on which the server will run */
const port = 3001;
/** create express app */
const app = express();
/** parse request of content-type - 
application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));
/** parse requests of content-type - 
application/json */
app.use(express.json());
/** define the root route */
app.get("/", (req, res) => {
  res.send("Hello World");
});
/** listen for request */
app.listen(port, (err) => {
  err && console.log(err);
  console.log(`Server is listening on port ${port}`);
});
```

To run this code, we will write some scripts inside the scripts section in the package.json file. 

```
 "scripts": {
    "test": "echo \"Error: no test specified\"&&exit1",
    "start": "nodemon index.js"
  },
```

Now I will go to the terminal and run my code.

```
$ npm start
```

let me create the table inside the database before connecting to my project.

```
CREATE TABLE `core`.`post` ( `id` INT NOT NULL AUTO_INCREMENT , 
`title` VARCHAR(255) NOT NULL , `content` TEXT NOT NULL , `author` 
VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```

After creating the table inside the database. I will write the code to connect the database.

```
const express = require("express");
/** import mysql dependecies */
const mysql = require("mysql");
/** port on which the server will run */
const port = 4001;
/** create database connection */
const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "core",
});
/** connect and check the error */
connection.connect((err) => {
  err && console.log(err);
  console.log("Database Successfully Created");
});
/** create express app */
const app = express();
/** parse request of content-type - 
application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));
/** parse requests of content-type - 
application/json */
app.use(express.json());
/** define the root route */
app.get("/", (req, res) => {
/** retrieve data from database */
  connection.query("SELECT * from post", 
  (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});
/** listen for request */
app.listen(port, (err) => {
  err && console.log(err);
  console.log(`Server is listening on port ${port}`);
});
```

I will create API entry points GET, POST, UPDATE and DELETE.

```
const express = require("express");
const mysql = require("mysql");
/** port on which the server will run */
const port = 4001;
/** create express app */
const app = express();
/** parse requests of content-type - 
application/json */
app.use(express.json());
/** parse request of content-type - 
application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));
/** database connection */
const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "core",
});
connection.connect((err) => {
  err && console.log(err);
  console.log("Database Successfully Created");
});
/** define the root route */
/** get api method get */
app.get("/", (req, res) => {
  connection.query("SELECT * from post",
  (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});
/** get by id api method get  */
app.get("/", (req, res) => {
  connection.query("SELECT * from post", 
  (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});
/** create api method post */
app.post("/", (req, res) => {
  const { title, content, author } = req.body;
  connection.query(
    "INSERT INTO post SET ?",
    { title, content, author },
    (err, result) => {
      err && console.log(err);
      if (result) {
        res.json(
           { message: "Post Successfully Created" }
       );
      }
    }
  );
});
/** update api for update author method PATCH */
app.patch("/:id", (req, res) => {
  let data = [req.body.author, req.params.id];
  connection.query(
    "UPDATE post SET author = ? WHERE id = ? ",
    data,
    (err, result) => {
      err && console.log(err);
      res.json({message: "Successfully Updated"});
    }
  );
});
/** delete api for deleting particular data from 
database method delete */
app.delete("/:id", (req, res)=>{
  connection.query('DELETE FROM post WHERE id = ?', 
  [req.params.id], (err, result)=>{
    err && console.log(err)
    res.status(200).json(
       {message: "Successfully Deleted"}
    )
  })
})
/** listen for request */
app.listen(port, (err) => {
  err && console.log(err);
  console.log(`Server is listening on port ${port}`);
});
```

Now, it's the final code. Where I made crud API using Node, Express, and MySQL. So, I hope you learn something coding with me.