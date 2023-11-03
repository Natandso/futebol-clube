import * as sinon from 'sinon';
import * as chai from 'chai';
import JWT from '../utils/JWT';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeUser from '../database/models/UserModel';
import {
  user,
  noPasswordUser,
  wrongPasswordUser,
  users,
  userWithInvalidEmail,
  userWithInvalidPassword,
  validLoginBody,
  userRegistered,
} from './mocks/users.mock';
import Validate from '../middlewares/validateLogin';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login tests', () => {
  afterEach(sinon.restore);

  it('should not can do the login with invalid body', async function () {
    const { status, body } = await chai.request(app).post('/login').send({});

    expect(status).to.equal(400);
    expect(body).to.be.deep.equal({ message: 'All fields must be filled' });
  });

  it('should not can access wih userWithInvalidEmail', async function () {
    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(userWithInvalidEmail);

    expect(status).to.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });

  it('should not can access with userWithInvalidPassword ', async function () {
    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(userWithInvalidPassword);

    expect(status).to.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });

  it('should not do the login if the user was not found', async function () {
    sinon.stub(SequelizeUser, 'findOne').resolves(null);

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(validLoginBody);
    expect(status).to.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });

  it('should return invalid error message  when password is wrong', async function () {
    sinon.stub(SequelizeUser, 'findOne').resolves(wrongPasswordUser as any);

    sinon.stub(JWT, 'sign').returns('validToken');
    sinon.stub(Validate, 'validateLogin').returns();

    const { status, body } = await chai
      .request(app)
      .post('/login')
      .send(validLoginBody);

    expect(status).to.equal(401);
    expect(body.message).to.equal('Invalid email or password');
  });
});
