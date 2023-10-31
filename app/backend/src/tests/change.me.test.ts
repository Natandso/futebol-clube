import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { teams, team } from './mocks/teams.mock';
import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import SequelizeTeams from '../database/models/TeamsModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('shoudl return all teams', async function() {
sinon.stub(SequelizeTeams, 'findAll').resolves(teams as any)

const { status, body }= await chai.request(app).get('/teams');

expect(status).to.eq(200);
expect(body).to.deep.eq(team)
  });

  it('shoudl return a team by id', async function() {
    sinon.stub(SequelizeTeams, 'findOne').resolves(teams as any)
    
    const { status, body }= await chai.request(app).get('/teams/1');
    
    expect(status).to.eq(200);
    expect(body).to.deep.eq(team)
      });

      it('should return not found if the team doesn\'t exists', async function() {
        sinon.stub(SequelizeTeams, 'findOne').resolves(null);
    
        const { status, body } = await chai.request(app).get('/teams/1');
    
        expect(status).to.equal(404);
        expect(body.message).to.equal('team 1 not found');
      });
  afterEach(sinon.restore);
});
