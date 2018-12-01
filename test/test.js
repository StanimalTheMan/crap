const chai = require('chai');
const expect = chai.expect;
var request = require('supertest');
var assert = require('assert');


//test loading of homepage, registration and login

describe('loading express', function () {
    var server;
    beforeEach(function () {
      server = require('../app');
    });
    afterEach(function () {
      server.close();
    });
    it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
    });
    it('responds to /login', function testLogin(done) {
    request(server)
      .get('/login')
      .expect(200, done);
    });
    it('responds to /register', function testRegister(done) {
    request(server)
      .get('/register')
      .expect(200, done);
    });
    it('responds to /logout', function testLogout(done) {
    request(server)
      .get('/logout')
      .expect(302, done);  
    });
    it('responds to /diaries/add', function testPath(done) {
    request(server)
      .get('/diaries/add')
      .expect(302, done);
    });
    it('responds to particular diary', function testPath(done) {
    request(server)
      .get('/mydiaries/:slug')
      .expect(302, done);
    });
    it('404 everything else', function testPath(done) {
    request(server)
      .get('/nothingoverhere')
      .expect(404, done);
    });
  });

  