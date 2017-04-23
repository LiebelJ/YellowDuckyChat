# YellowDuckyChat
visit - http://aws.yellowducky.co:8080/

view all "persons"
```
http://aws.yellowducky.co:8080/api/persons
```

insert into the db
```
$ curl -H "Content-Type: application/json" -X POST -d '{"name":"John","age": 22}' http://aws.yellowducky.co:8080/api/persons/
```


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


## Docker

create websocket docker image

```
$ cd wsNodejs
$ docker build -t wsserver .
```

create sbt (backend) docker image

```
$ cd backend
$ rm -rf target/ play-reactive-mongo-db-1.0-SNAPSHOT/
$ sbt dist
$ sbt docker:publishLocal
```