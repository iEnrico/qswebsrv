# relivr-web

## Project setup

### Prerequiste

* Node version 18.6.0
* Docker Desktop (Install over [website](https://www.docker.com/products/docker-desktop/))

### Docker

Starting your Docker-Desktop application

##### Develop (In progress)

```
docker-compose -f docker-compose.dev.yml up
```

##### Production (In progress - Some problems)

```
docker-compose -f docker-compose.prod.yml build
```

### Deployment (Internal FTP)

Build the web application

```
npm run build
```

Build the container (image)

```
docker build . -t application-webproject
```

Export the image into an archive

```
docker image save -o relivrweb.tar application-webproject
```

#### Next steps

* Upload the "relivrweb.tar" into the directory "/var/www/vhosts/relivr/home" on the server
* Connection to the server (See internal Wiki of the project)
  * Windows: putty
  * Unix/Mac: Terminal

### Default

#### Install dependencies

```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
