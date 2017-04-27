#!/bin/bash
cd frontend &&
echo "Installing webpack plugins" &&
npm install ng-router-loader awesome-typescript-loader angular2-template-loader --save-dev && 
npm install to-string-loader --save-dev &&
npm install copy-webpack-plugin --save-dev &&
npm install moment include-media bootstrap --save &&
echo "NPM install" &&
npm install &&
cd ../wsNodejs &&
echo "Build WS docker image" &&
docker build -t wsserver . &&
cd ../backend &&
echo "Removing old files" &&
rm -rf target/ public/ &&
echo "Building backend image" &&
sbt dist &&
sbt docker:publishLocal &&
cd .. &&
echo "Starting up docker-compose" &&
docker-compose up -d
