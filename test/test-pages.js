var chai = require('chai');
var chaiHttp = require('chai-http');
var expect  = require('chai').expect;
var app = require("../app.js");
var should = chai.should();

chai.use(chaiHttp);

describe('Sample Hello World', () => {
	it('Root content should be Hello World!', function(done) {
		chai.request(app)
		.get('/')
		.end(function(error, response) {
			should.not.exist(error);
			should.exist(response);
			expect(response.text).to.deep.equal('Hello World!');
			done();
		});
	});

	it('Http Status should be 200', function(done) {
		chai.request(app)
		.get('/')
		.end(function(error, response) {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});

	it('About page Status should be 404', function(done) {
		chai.request(app)
		.get('/about')
		.end(function(error, response) {
			expect(response.statusCode).to.equal(404);
			done();
		});
	});
});