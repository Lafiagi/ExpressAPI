const express = require('express');
const path = require('path');
//const { Pool } = require('pg');
const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/controller');

app.use(express.json());
app.use(router);
app.listen(port, () => console.log(`Listening on port ${port}`));