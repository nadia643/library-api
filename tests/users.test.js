const mongoose = require('mongoose');
const User = require('../src/models/user');
const  chai = require('chai');  

describe('Post /users', function() {
    beforeEach(function(done) {
        it('creates a new user in the database', (done) => {
            chai.request(server)
            .post('users')
            .send({
                firstName: 'string',
                lastName: 'string',
                email: 'email',
                password: 'string',
            })
            .end((error, res) => {
                expect(error).to.equal(null);
                expect(res.status).to.equal(201);
            User.findById(res.body._id, (err, user) => {
            expect(err).to.equal(null);
            expect(user.name).to.equal('Nadia');
            expect(artist.lastName).to.equal('Amroon');
            expect(user.email).to.equal('nadia643@gmail.com');
            expect(user.passwor).to.equal('Nadia');

            done();
        });

});

//Makes a POST request to your server, sending a JSON body with firstName, lastName, email and password fields
//Asserts that the response status indicates that a new resource has been created
//Uses the _id field xfrom the response body to find the created User document in the database
//Asserts that the created user has the correct firstName, lastName, email and password properties