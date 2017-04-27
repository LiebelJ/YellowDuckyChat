# YellowDuckyChat
visit - http://aws.yellowducky.co:8080/

Use lazy script to install npm packages, docker images, and starting docker-compose
Use at your own risk! :)

```
$ ./lazy.sh 
```

## Webpack plugins needed in frontend

Loaders
```
$ npm install ng-router-loader awesome-typescript-loader angular2-template-loader --save-dev 
```

Style
```
$ npm install to-string-loader --save-dev
```

Plugins
```
$ npm install copy-webpack-plugin --save-dev
```

Extra libraries
```
$ npm install moment include-media bootstrap --save
```

npm install
```
$ npm install
```


## Docker

create websocket docker image

```
$ cd wsNodejs
$ docker build -t wsserver .
```

create sbt (backend) docker image

```
$ cd backend
$ rm -rf target/ play-reactive-mongo-db-1.0-SNAPSHOT/ public/
$ sbt dist
$ sbt docker:publishLocal
```

docker compose

```
$ docker-compose up -d
```
