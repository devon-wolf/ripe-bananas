const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer');

const reviewer = {
    name: 'Amadaeus Coconut',
    company: 'Island Time Reviews',
};

describe('ripe-bananas routes', () => {
    beforeEach(() => {
        return db.sync({force: true});
    });
    beforeEach(async () => {
        originalReviewer = await Reviewer.create(reviewer);
    });

    it('creates a new Reviewer', () => {
        const newReviewer = {
            name: 'Lucille Funkhousen',
            company: 'Give It To Me Straight, Reviews',
        };

        return request(app)
            .post('/api/v1/reviewers')
            .send(newReviewer)
            .then((res) => {
                expect(res.body).toEqual({
                    ...newReviewer,
                    id: 2
                })
            })
    })
    it('gets all Reviewers', () => {

        return request(app)
            .get('/api/v1/reviewers')
            .then((res) => {
                expect(res.body).toEqual({
                    ...reviewer,
                    id: 1
                })
            })
    })


});
