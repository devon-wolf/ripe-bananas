const db = require('../lib/utils/database')
const request = require('supertest');
const app = require('../lib/app')
const Actor = require('../lib/models/Actor')

describe('ripe-banana actor routes', () => { 
    beforeEach(() => { 
        return db.sync({ force: true });
    });
    beforeEach(async () => { 
        originalActor = await Actor.create(actor)
    })
    it('creates a new Actor', () => { 
        const newActor = { 
            name: 'Robert Downey Jr',
            dob: '04-04-1965',
            pob: 'Manhattan, New York, NY'
        };

        return request(app)
            .post('/api/v1/actors')
            .send(newActor)
            .then((res) => { 
                expect(res.body).toEqual({
                    ...newActor,
                    id: 2
                })
            })
    })
})