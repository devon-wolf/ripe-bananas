// require('../lib/models/associations');
const db = require('../lib/utils/database')
const request = require('supertest');
const app = require('../lib/app')
const Actor = require('../lib/models/Actor')


const actor = { 
    name: 'Robert Downey Jr',
    dob: '1965-04-04',
    pob: 'Manhattan, New York, NY'
};

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
            dob: '1965-04-04',
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
    it('gets all Actors', async () => { 
        return request(app)
            .get('/api/v1/actors')
            .then((res) => {
                expect(res.body).toEqual([{
                    ...actor,
                    id: 1,
                }])
            })
    })
    // it('gets an actor by id', async () => { 
    //     return request(app)
    //         .get('/api/v1/actors/1')
    //         .then((res) => { 
    //             expect(res.body).toEqual({
    //                 ...actor,
    //                 id: 1
    //             })
    //         })
    // })

});