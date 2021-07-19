---
blogTitle: Create React App Development Environment
author: Shrestha Pradhuman
category: React
date: 2021-07-19T06:36:15.115Z
blogImage: https://miro.medium.com/max/1400/1*CeuWv9fCjD1uTiTuKytnBQ.png
---
**T**oday I will create the React Development Environment. Before I create the project let me tell you a little about React.

### What is React?

React is a JavaScript library for building user interfaces. React is used to build single-page applications.  React also allow us to create reusable UI components. for more information visit [React](https://reactjs.org/) official website.

Now I will build React development environment.

### Requirement:

The latest version of Nodejs, npm, or yarn should be preinstalled.

Go to the terminal and create the project folder.

```
$ mkdir project
```

Now create the React app using the following command.

```
$ cd project
$ npx create-react-app app-name
```

After waiting for few seconds  React development environment is ready. Then inside the app root folder run command.

```
$ cd app-name
$ npm start or yarn start
```

Let's check is it working or not. In the browser address bar type http://localhost:3000/. If It displays like this then It's ready to work on it.