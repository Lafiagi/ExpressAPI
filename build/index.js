'use strict';

var express = require('express');
var path = require('path');
//const { Pool } = require('pg');
var assert = require('assert');
var expect = require('chai').expect;
var request = require('supertest');
var app = express();
var port = process.env.PORT || 3000;
var controller = require('./routes/controller');

app.use(express.json());

var users = [];
var messages = [{
  "id": 1,
  "​createdOn": new Date(),
  "​subject": "Hello ",
  "message": "My first Message",
  "parentMessageId": 1,
  "​status": "Recieved"
}, {
  "id": 2,
  "​createdOn": new Date(),
  "​subject": "Hello ",
  "message": "My Second Message",
  "parentMessageId": 2,
  "​status": "Sent"
}, {
  "id": 3,
  "​createdOn": new Date(),
  "​subject": "Hello World",
  "message": "My Third Message",
  "parentMessageId": 3,
  "​status": "Recieved"
}];

/*const client = new Pool({
  username: 'postgres',
  password: 'sadiq123',
  host: 'localhost',
  port: 5432,
  database: 'LightWave',
});
*/
app.use(express.static(path.join(__dirname + '/views/style')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/signup.html'));
});

app.post('/auth/signup', function (req, res) {
  users.push({ id: users.length + 1, fname: req.body.fname, lname: req.body.lname, email: req.body.email, phone: req.body.phone, password: req.body.password });
  res.status(200).json({
    "data": [{ "token": "23298sdhskjhd89whjkshd98wjjw" }],
    "status": 200 });
});

app.post('/auth/login', function (req, res) {
  users.push({ id: users.length + 1, fname: req.body.fname, lname: req.body.lname, email: req.body.email, phone: req.body.phone, password: req.body.password });
  res.status(200).json({
    "data": [{ "token": "ahd64jfhHG7832KFM5" }],
    "status": 200 });
});

app.post('/messages', function (req, res) {
  messages.push({ createdOn: new Date(), subject: "Hello Dear", message: "Hello this is message number " + messages.length, status: "Sent", parentMessageId: messages.length + 1, id: users.length + 1, fname: req.body.fname, lname: req.body.lname, email: req.body.email, phone: req.body.phone, password: req.body.password });
  res.status(200).json({ "status": 200, "data": messages });
});

app.get('/messages', function (req, res) {
  res.status(200).json(messages);
  //get all recieved messages
});

app.get('/messages/unread', function (req, res) {
  res.status(200).json(messages);
});

app.get('/messages/sent', function (req, res) {
  res.status(200).json({
    "status": 200,
    "data": messages
  });
});

app.get('/messages/:id', function (req, res) {
  messages.forEach(function (element) {
    if (parseInt(req.params.id) === element.id) res.status(200).json({
      "status": 200,
      "data": element
    });
  });
  res.status(404).json({ "Message": "Not found", "status": 404 });
});

app.delete('/messages/:id', function (req, res) {
  var deleted = "";
  messages.forEach(function (element) {
    if (parseInt(req.params.id) === element.id) {
      deleted = messages.splice(messages.indexOf(element), 1);
      res.status(200).json({
        "status": 200,
        "data": [deleted]
      });
    }
  });
  res.status(404).json({ "Message": "Not found", "status": 404 });
});
app.listen(port, function () {
  return console.log('Listening on port ' + port);
});

/*

[
        {
          "id" : messages.length ,
          "createdOn" : messages[0].createdOn,
          "subject" : messages[0].subject ,
          "message" : messages[0].message ,
          "senderId" : 2111,
          "receiverId" : 11,
          "parentMessageId" : messages[0].parentMessageId,
          "status" : "Sent"
        }
      ]

*/