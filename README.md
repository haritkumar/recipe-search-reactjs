## Recipe Search ReactJs App
![alt text](http://res.cloudinary.com/haritkumar/image/upload/v1534689777/github/recipe.png)
### Instructions
```sh
git clone https://github.com/haritkumar/recipe-search-reactjs.git
cd recipe-search-reactjs/
npm install redux react-redux bootstrap reactstrap jquery font-awesome react-router-dom --save
npm start
```
- Install Allow-Control-Allow-Origin: * plugin in chrome to run 
- https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
  
### Run Build
```sh
npm run-script build
npm install -g serve
serve -s build [You may serve it with a static server]
```

### Docker Image
```sh
FROM httpd:2.4
LABEL maintainer="haritkumar@hotmail.com"
COPY ./build/ /usr/local/apache2/htdocs/
```

```sh
docker build -t my-apache2 .
docker run -dit --name my-running-app -p 8080:80 my-apache2
```
- Access here http://localhost:8080/
  
### Font Awesome Icons
- https://fontawesome.com/v4.7.0/icons/
- https://reactstrap.github.io/