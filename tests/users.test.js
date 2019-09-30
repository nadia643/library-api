const mongoose = require('mongoose');
const User = require('../src/models/user');
const chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Post /users', () => {
  beforeEach((done) => {
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
            expect(user.password).to.equal('Nadia');

            done();
          });
        });
    });
  });
});
