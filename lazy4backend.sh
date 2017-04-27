#!/bin/bash
cd backend &&
rm -rf target/ public/ &&
echo "building backend image" &&
sbt dist &&
sbt docker:publishLocal &&
cd .. &&
echo "starting up docker-compose" &&
docker-compose up -d
