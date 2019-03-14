const router = require('express').Router();
const express = require('express');
const app = express();
let data_structures = require('../models/db');
const handler = require('./handler')

router.get('/api/v1', handler.welcome);

router.post('/api/v1/auth/signup', handler.register);

router.post('/api/v1/auth/login', handler.login);

router.get('/api/v1/messages', handler.getAllMessages);

router.post('/api/v1/messages', handler.sendMessage);

router.get('/api/v1/messages/sent', handler.getSent);

router.get('/api/v1/message/:id', handler.getOneMessage);

router.get('/api/v1/users', handler.users)

router.get('/api/v1/users/:id', handler.user)

router.get('/api/v1/messages/unread', handler.unread)

router.get('/api/v1/messages/unread/:id', handler.oneUnread)

router.get('/api/v1/messages/read', handler.read)

router.get('/api/v1/messages/read', handler.oneRead)

router.delete('/api/v1/messages/:id', handler.deleteOne);

module.exports = router;



