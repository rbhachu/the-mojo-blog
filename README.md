[![Build Status](https://travis-ci.org/gelstudios/gitfiti.svg?branch=master)](https://travis-ci.org/gelstudios/gitfiti) [![Heroku](https://heroku-badge.herokuapp.com/?app=rbhachu-the-mojo-blog)](https://github.com/rbhachu/the-mojo-blog)


## Update v1.1
<p>- New JSON Server created with `House Keeping` feature for the Mojo Blog: https://github.com/rbhachu/JSON-Server-Heroku-HK</p>

<p>- Loading Animation added to replace text</p>

![Mojo Blog Preview](./src/images/loading-status.gif)

-----
<br>
<br>

<h1 align="center">The Mojo React.js Blog</h1>
<div align="center">

:rocket: **[View Live Demo](https://rbhachu-the-mojo-blog.herokuapp.com)** :rocket:<br>

![Mojo Blog Preview](./src/images/site-demo.gif)

</div>

## Description
<p>A simple React.js Blog using custom hooks, with a REST API connected to a JSON Server. Plus pagination and redirects from React Router Dom.</p>

## Features
**Project features:**
  <ul>
    <li>Create a New Post</li>
    <li>Delete a Post</li>        
    <li>View All Posts</li>
    <li>View Single Post via dynamic page link</li>
    <li>Error 404 Page</li>    
    <li>PWA Enabled</li>    
  </ul>

## Dependencies/NPM Modules
__The following dependencies are required to run this project;__

[React v17.02 *](https://www.npmjs.com/package/react) - Used for site framework with React Hooks. Fetch to connect to REST API and convert to useable JSON format.<br>
[React Router Dom v5.2.0 *](https://www.npmjs.com/package/react-router-dom) - Used for Pagination, History and Error 404 Page.<br>
[Concurrently v6.0.2 **](https://www.npmjs.com/package/concurrently) - Used to run multiple services from a single terminal session (only required to run JSON server locally).<br>
*_Installed automatically_<br>
**_Requires separate manual installation_


## Installation Instructions
<p>Open your Code Editor and 'CD' into your working directory, then download the repo to that location.<p>

```sh
git clone https://github.com/rbhachu/the-mojo-blog.git
```
<p>Once the repo has been downloaded, 'CD' to the newly downloaded project folder; 'cd the-mojo-blog'.<p>

```sh
npm install
```
----------

<p>Next you need to decide if you would like to run JSON server via your 'Local Machine' (locally) or 'Remotely' via Heroku servers (free).<p>


### -JSON Server via Local Machine
<p>To run locally, you will first need to install the Concurrently NPM package.</p>


<br>__Concurrently NPM Package__
<p>Concurrently allows multiple terminal services to be executed.... (wait for it...) `concurrently` 😁. Which is perfect for our requirements, as we will need to run the Mojo Blog Client front-end, simultaneously with the back-end JSON server Rest API.</p>
<p>To install Concurrently, run the following command in your terminal to install it;</p>

*Reference: [Concurrently NPM Module](https://www.npmjs.com/package/concurrently)*

````sh
npm install -g concurrently
````

<br>__Package.json__ (file path: ./package.json/)
<p>In order for the Concurrently NPM Package to work, we also need to modify the 'Start' value in the 'scripts' section of the Package.json file located in the root of the project. This will allow us to run both the front-end and back-end services simultaneously once executed.
</p>
<p>Use the settings below in your Package.json file. *</p>

````json
  "scripts": {
    "start": "concurrently --kill-others \"react-scripts start\" \"npx json-server --watch data/db.json --port 8000\"",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
````

<ul>
  <li>--watch : path to JSON file in project for JSON server to edit/monitor (data/db.json)</li>
  <li>--port : port to run JSON Server (8000 is used, so it does not conflict with REACT's  default port of '3000' which is used to run the front-end client.). * You can change this port value if you have issues to another number other than 3000.</li>
</ul>


<br>__.env file__ (file path: ./.env/)
<p>Situated in the root of the project is the .env file. This file contains the settings to connect to the local JSON Server back-end.</p>
<p>Copy and replace all settings with the values below (ensure port value is the same as in package.json file above).</p>

````
REACT_APP_API_PATH="http://localhost:8000/blogs"
````

<p>

**Now you can skip to the next section called 'Usage Instructions' to finally deploy the Project.**
</p>

----------

### -JSON Server via Heroku Remote Server
<p>To use the remote version of JSON Server, follow the instructions from Heroku below;

[Heroku Remote JSON Server Instructions](https://elements.heroku.com/buttons/eecs130/json-server-heroku)<br />

[JSON Server Back-End Repo](https://github.com/rbhachu/JSON-Server-Heroku)
<br />

*In step 2 of the instructions from Heroku, use the db.json file from this repo as a template, located at '/data/db.json/', and ignore the instructions in 'How it works' for port settings at the end.*
<br />

__db.JSON File example__ (file path: ./data/db.json)
</p>

````json
{
  "blogs": [
    {
      "postTitle": "My First Blog",
      "body": "Why do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\nWhere can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      "author": "mario",
      "id": 1
    },
    {
      "postTitle": "Opening Party!",
      "body": "Why do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n\nWhere does it come from?\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n\nWhere can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      "author": "yoshi",
      "id": 2
    }
  ]
}
````

<p>As JSON server is running remotely, we only need to run 'React' locally, therefore ensure that Package.json file is set as follows so it only runs 'React' when we execute the 'npm start' command in the terminal.</p>

__Package.json File__ (file path: ./package.json/)
````json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
````

__.env file__ (file path: ./.env/)
<p>To connect to your JSON Server add it using the format below, replacing 'XXXX' with your server link.</p>

*for example: REACT_APP_API_PATH="https://myherokuserverlink.herokuapp.com/blogs"*

````json
REACT_APP_API_PATH="https://XXXX/blogs"
````

----------

## Usage Instructions
<p>Finally, to run the Blog, simply execute the following command in your terminal (ensuring you are in the correct project directory too).</p>

```sh
npm start
```
<p>After a few seconds, your browser should automatically open to the following link;

[http://localhost:3000](http://localhost:3000)

and display the project in the browser.</p>
![Mojo Blog Preview](./src/images/localhost-preview.png)


## Author
👤 **Rishi Singh Bhachu**<br>
:octocat: [GitHub](https://github.com/rbhachu)<br>
<a target="_blank" title="https://www.linkedin.com/in/RishiSinghBhachu/" href="https://www.linkedin.com/in/RishiSinghBhachu/"><img src="https://img.shields.io/badge/-Rishi&nbsp;Singh&nbsp;Bhachu-0077B5?style=flat&logo=Linkedin&logoColor=white"/></a>


## Issues
Please drop me a message if you have any issues or problems running the project.


## Show your support
Give a ⭐️ if this project helped you!
