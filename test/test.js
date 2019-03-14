let chai = require('chai');
const assert = require("chai").assert
let chaiHttp = require('chai-http');
let should = chai.should();
const app = require('../server.js')
chai.use(chaiHttp);

describe('Messages', () => {
    it('should list ALL messages', function(done) {
        chai.request('http://localhost:3000')
          .get('/api/v1/messages')
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });
      
});


