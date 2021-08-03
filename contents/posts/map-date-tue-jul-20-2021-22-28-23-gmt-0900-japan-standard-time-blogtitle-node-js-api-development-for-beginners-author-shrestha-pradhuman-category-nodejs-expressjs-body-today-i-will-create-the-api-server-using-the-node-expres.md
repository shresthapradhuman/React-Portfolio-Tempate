---
blogTitle: Node JS API Development For Beginners
author: Shrestha Pradhuman
category: NodeJS, ExpressJS
date: 2021-07-20T13:28:23.254Z
blogImage: https://1.bp.blogspot.com/-c6I-UQuTFuo/YPGeh69uVlI/AAAAAAAAAAU/4NQ6wMnwaxoKQCVPar43e4E77bhXnGmoACLcBGAsYHQ/w640-h269/nodeandexpress.png
---
Today I will create the API server using the Node ExpressJS framework. Here I will not explain NodeJS and ExpressJS. So, please refer to other online articles. So, let's get started.

Open Terminal and create a project folder.



```
$ mkdir express-server
```



Inside project folder initialize node package module.



```
$ npm init
```

It will ask for package name, version, description, git repository, author, blah blah. So, you can put every detail or just hit enter, where it will take the default value by itself. Then we will install express using npm.

```
$ npm i -S express
```

After installation, it will be added under the dependencies section in the package.json file. Now we will create a new file index.js in our project folder. Where we will write code for running our server.

```
*const express = require('express'); const app = express();*

*const port = process.env.PORT || 3001*

/\*\* Here we can create a route GET, POST, PATCH

DELETE Which takes two parameters request and

response. request flows from client to server and

response flows from server to client */

app.get("/",(req, res)=>{

res.json({messgae:"Get Route"});

});

/\*\* now we will connect our server to port

we define at the top and also console the error

and success message

\*/

app.listen((err)=>{

if(err) console.log(err)

console.log(\`Connected To Port ${port}\`);

});
```

After finishing the code we will run the code in the terminal from the root project folder.

```
$ node index.js
```

Now, we can check it in the browser by typing http://localhost:3001/ in the address bar. For more information follow the link.