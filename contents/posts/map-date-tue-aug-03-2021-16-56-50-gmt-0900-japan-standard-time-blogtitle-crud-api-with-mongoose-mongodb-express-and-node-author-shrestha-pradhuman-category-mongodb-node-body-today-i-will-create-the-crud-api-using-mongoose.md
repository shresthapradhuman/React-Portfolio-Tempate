---
blogTitle: CRUD API With Mongoose, MongoDB, Express And Node
author: Shrestha Pradhuman
category: MongoDB, Node
date: 2021-08-03T07:56:50.374Z
blogImage: https://res.cloudinary.com/practicaldev/image/fetch/s--0QbcuqxC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/mastering-mongoose-for-mongodb-and-node-js-mongoose-diagram-77560014632570f4.png
---
Today I will create the CRUD API using Mongoose, MongoDB, Express and Node. 

Prerequisites:

1. Node.js (latest version): Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications.
2. Express : Node.js web application framework that provides a robust set of features to develop web and mobile applications.
3. MongoDB: No MySQL Database which uses documents and collections.\
   (either you can install it in your local machine or you can use [MongoDB Atlas ](https://www.blogger.com/blog/post/edit/8786400733664376562/5825975373584165378#)online. for this I will use the one I install in my local machine).
4. Mongoose : Object Data Modelling for Node.js.
5. Postman:  Open Source For Testing API.

First  I will install the Node.js and MongoDB in our local machine. I am using Linux OS in my local machine. So, for installing MongoDB in machine I will follow this [site](https://www.blogger.com/blog/post/edit/8786400733664376562/5825975373584165378#), for installing Node.js I will follow this [site](https://www.blogger.com/blog/post/edit/8786400733664376562/5825975373584165378#). After Installation let's start our project.\
\
Step 1: Create Project Folder and perform node initialization

```
$: mkdir node-mongodb-mongoose
$ cd node-mongodb-mongoose
$ npm init -y
```

Step 2: Install the Dependencies for our project

```
$ npm install express nodemon mongoose
```

Step 3: create simple Rest API set using express.

```
const express = require("express");

const app = express();

const port = 3001;

/\*\* Database Connection */

/\*\* Create User Schema */

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

/\*\* Routes GET, POST, UPDATE,

DELETE FOR CREATE, RETRIVE, UPDATE, DELETE */

app.get("/user", (req, res) => {

res.status(200).json({ message: "retrived" });

});

app.post("/register", (req, res) => {

res.status(201).json({ message: "created" });

});

app.patch("/user/:id", (req, res) => {

res.status(200).json({ message: "updated" });

});

app.delete("/user/:id", (req, res) => {

res.status(204).json({ message: "delete" });

});

app.listen(port, (error) => {

error && console.log(error);

console.log(\`Server is listening at port ${port}\`);

});
```

Step 4 : Setup connection between Node and MongoDB using mongoose.

Add this code below the line Database Connection Comment.

```
const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/mongodb";

mongoose

.connect(URI, {

useNewUrlParser: true,

useUnifiedTopology: true,

useCreateIndex: true,

useFindAndModify: false,

})

.then(() => {

console.log("Database Connected Successfully");

})

.catch((error) => console.log(error));
```

Step 5: After Connection I will create our schema in our database.

Add below code below the line create user schema.

```
const userSchema = mongoose.Schema({

email: {

type: String,

required: true,

unique: true,

max: 255,

},

password: {

type: String,

required: true,

max: 1024,

min: 6,

},

});

const User = mongoose.model("User", userSchema);
```

Step 6: After creating the schema I will write the code to create, retrieve, delete and

update the data in MongoDB using mongoose.

replace the post section with this code to create the data

```
app.post("/register", async (req, res) => {

/\*\* mongoose create code */

const user = new User(req.body);

try {

await user.save();

res.status(201).json({

        success: "created successfully"

    });

} catch (error) {

res.status(400).json({ error: error });

}

});
```

replace get section code to read the data

```
app.get("/user", async (req, res) => {

try {

const users = await User.find({});

res.status(200).json(users);

} catch (error) {

res.status(400).json({ error: error });

}

});
```

replace patch section to update the data

```
app.patch("/user/:id", async (req, res) => {

try {

const users = await User.findOneAndUpdate(

{

_id: req.params.id,

},

{ password: req.body.password }

);

res.status(200).json(

       {

        success: "updated successfully"

       }

    );

} catch (error) {

res.status(400).json({ error: error });

}

});
```

replace the delete section to delete the data

```
app.delete("/user/:id", async (req, res) => {

try {

const user = await User.findByIdAndDelete(

            req.params.id

        );

res.status(204).json({

           success: "deleted successfully"

    });

} catch (error) {

res.status(400).json({ error: error });

}

});
```

Step 7: After replacing the old lines of code with above code. I am almost done. Now I will modified package.json

file to run the server. I will add start script using node dependencies nodemon.

```
{

"name": "server",

"version": "1.0.0",

"description": "",

"main": "index.js",

"scripts": {

"test": "echo "Error: no test specified" && exit 1",

"start": "nodemon index.js"

},

"keywords": \[],

"author": "",

"license": "ISC",

"dependencies": {

"express": "^4.17.1",

"mongoose": "^5.13.5",

"nodemon": "^2.0.12"

}

}
```

Step 8 : Run the server and test the CRUD API using POSTMAN.

```
$ npm start
```

POSTMAN:

Get:

[![](https://1.bp.blogspot.com/-PHjI0OiBF2w/YQjwb2sfi8I/AAAAAAAAAB8/vlrqDKvnWzQUjMrOwLqu-d0nqsen9qv3ACLcBGAsYHQ/w640-h435/get.png)](https://www.blogger.com/blog/post/edit/8786400733664376562/5825975373584165378#)

Post:

[![](https://1.bp.blogspot.com/-Eb_ORMTCP_k/YQjxFOy6NpI/AAAAAAAAACE/mxQzfbPbUR0Il1pxfBZ5KhtY3LIHEeWzwCLcBGAsYHQ/w640-h434/post.png)](https://www.blogger.com/blog/post/edit/8786400733664376562/5825975373584165378#)

\
like this I created the curd API with mongoose, MongoDB, and node. Hope this will help you guys thanks.