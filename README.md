# react-redux-webpack

## Overview
A quick POC with Webpack, React  and Redux configuration for client side rendering.
This POC able to load markers on google map and provides you flexibility to apply CRUD operations on this markers.

## Features
* React 16
* Webpack 4
* Babel 8
* Bootstrap 4
* Hot Module Replacement

## Installation
* Run application - npm install
* Run bundling alone - npm run webpack
* Start application - npm start
* Open application via `http://localhost:8080/`

## Set-up
* Set MAP_API_KEY (google map/places) in app-config file for google map integration and make it work.
Note - You might won't see any markers on map and address finder suggestions working if key remain empty
* Set API_URL (any server api url) in app-config file. 

## API urls
* /api/ - get all records (GET)
* /api/ - post new record (POST)
* /api/:id - update any existing record (PUT)
* /api/:id - delete any existing record (DELETE)
