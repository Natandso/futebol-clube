import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeMatches from '../database/models/MatchesModel';
import { matches, matchesProgressFalse, matchesProgressTrue} from './mocks/matches.mocks'

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches tests', () => {
    afterEach(sinon.restore);
    it('should return our all matches', async function() {
        sinon.stub(SequelizeMatches, 'findAll').resolves(matches as any);

        const { status, body } = await chai.request(app).get('/matches');

        expect(status).to.eq(200);
        expect(body).to.deep.eq(matches)
      });
      
      
    it('should return all progress matches = false', async function() {
        sinon.stub(SequelizeMatches, 'findAll').resolves(matchesProgressFalse as any);
          
        const { status, body } = await chai.request(app).get('/matches?inProgress=false');
          
        expect(status).to.eq(200);
        expect(body).to.deep.eq(matchesProgressFalse)
        });
    it('should return all progress matches = true', async function() {
        sinon.stub(SequelizeMatches, 'findAll').resolves(matchesProgressTrue as any);
    
        const { status, body } = await chai.request(app).get('/matches?inProgress=true');
    
        expect(status).to.eq(200);
        expect(body).to.deep.eq(matchesProgressTrue)
          });       
})