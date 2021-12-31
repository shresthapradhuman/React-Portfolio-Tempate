---
blogTitle: WHAT IS REST API?
author: Shrestha Pradhuman
category: REST API
date: 2021-12-31T13:34:51.135Z
blogImage: /images/blog/rest.webp
---
Today I am going to tell you about REST API in a simple way that I have learned till now. First,  we will look at API which stands for "Application Program Interface". 

API enables an application or service to access a resource within another. For example,  you have a website for your restaurant. And Uber Eats or Other food delivery websites list your resources to their website using your website API.

API helps to exchange commands and data, but to do this requires clear protocols and architectures. So, we have some categories of API protocols and architectures. Like REST, SOAP,  RPC. But Today Topic is REST so we will talk about the REST over here.

REST is a set of architectural constraints, which stands for  "representational state transfer" and was created by computer scientist Roy Fielding. It is the most popular approach for building APIs.

### What defines a REST API?

In order for an API to be considered RESTful, it has to conform to these criteria:

1. Uniform interface:- All API requests should look concise and the same.
2. Client-Server:- Client & Server must be completely independent of each other. 
3. Stateless:-  Server isn't allowed to store any data related to a client request.
4. Cache:- Improve performance on the client, scalability on the server-side.
5. Layered System:- allow for the introduction of proxies, gateways, and firewalls.
6. Code on demand: responses can also contain executable code.

### How do REST APIs work?

REST APIs communicate via HTTP requests to perform CRUD operations within a resource. A request is made up of four things:

1. The Endpoint  (or route) is the url you request for. eg:- https://api.spotify.com/v1/artists.
2. The Method (POST, GET, DELETE, PUT, etch)
3. The Headers (Provide information such as authentication, body content)
4. The Data(or Body) (contains information you want to send to the server)

### Why REST?

1. works with XML, JSON, HTTP, and plain text.
2. provide a great deal of flexibility.
3. easier to work with
4. caching is easier
5. highly scalable

In conclusion, I think this is what REST API? So, I hope this will be helpful for you.