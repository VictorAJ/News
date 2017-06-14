'use strict'

var app = angular.module('NewsApp', ['ngMaterial','ngRoute'])

app.config(function($routeProvider, $mdIconProvider) {

    $mdIconProvider
      .iconSet('call', 'img/icons/sets/communication-icons.svg', 24);

    $routeProvider
    .when("/home", {
        templateUrl: "Templates/home.html"
    })
    .when("/description", {
        templateUrl: "Templates/description.html"
    })

    .otherwise({
        templateUrl: "Templates/home.html"
    });;
})
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var MongoClient = require('mongodb').MongoClient;
var socketObj;
var dbObj;
server.listen(9903);

app.get('/', function (req, res) {
    // if(dbObj != undefined) {            
    //     var collection = dbObj.collection('NewChartCollection');
    //     var lotsOfDocs = [
    //                 {name: 'www.site1.com', upload: random(), download: random(), total: random()},
    //                 {name: 'www.site2.com', upload: random(), download: random(), total: random()},
    //                 {name: 'www.site3.com', upload: random(), download: random(), total: random()},
    //                 {name: 'www.site4.com', upload: random(), download: random(), total: random()},
    //         ];

    //     collection.insert(lotsOfDocs, {w:1}, function(err, result) {
    //         collection.find({}, { _id: 0}).toArray(function(err, items) {
    //             console.log(items);
    //             socketObj.emit('news', items );
    //         });
    //     });
    // }
  res.send('ok');
});

io.on('connection', function (socket) {
    MongoClient.connect("mongodb://victor:Admin123@ds127132.mlab.com:27132/passmanager", function(err, db) {
        if(!err) {
            console.log("We are connected");
            dbObj =  db;
        }
    });
  socketObj = socket;
  socket.on('my other event', function (data) {
    console.log(data);
  });

});



{
  "name": "fetchReports",
  "version": "1.0.0",
  "description": "Pull report based on game start and end date",
  "main": "server.js",
  "scripts": {
    "test": "./node_modules/.bin/jasmine-node spec",
    "start": "node server.js"
  },
  "author": "Victor",
  "license": "ISC",
  "dependencies": {
    "angular": "^1.6.4",
    "body-parser": "^1.15.2",
    "config": "^1.24.0",
    "cookie-parser": "^1.4.3",
    "cors": "^2.8.0",
    "csv-parse": "^1.2.0",
    "dateformat": "^2.0.0",
    "express": "^4.15.3",
    "forever": "^0.15.3",
    "fs": "0.0.1-security",
    "fs-extra": "^0.30.0",
    "http": "0.0.0",
    "jasmine-node": "^1.14.5",
    "mongodb": "^2.2.28",
    "node-cron": "^1.1.3",
    "nodemailer": "^3.1.5",
    "request": "^2.81.0",
    "socket.io": "^2.0.3",
    "underscore": "^1.8.3",
    "winston": "^2.3.0",
    "winston-daily-rotate-file": "^1.3.1"
  }
}
