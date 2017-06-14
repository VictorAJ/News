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
