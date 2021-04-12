require('../lib/models/associations')
const db = require('../lib/utils/database');
const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer');
const Review = require('../lib/models/Review');

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
                expect(res.body).toEqual([{
                    ...reviewer,
                    id: 1
                }])
            })
    })

    // get by id
    it('gets a reviewer and their reviews when given an id', async () => {
        await request(app)
            .post('/api/v1/reviews')
            .send({
                rating: 2,
                review: 'blah',
                FilmId: 2,
                ReviewerId: 1,
            })
        return request(app)
            .get('/api/v1/reviewers/1')
            .then((res) => {
                console.log(res.body);
                expect(res.body).toEqual({
                    ...reviewer,
                    id: 1,
                    Reviews: [{
                        rating: 2,
                        review: 'blah',
                        FilmId: 2,
                        ReviewerId: 1,
                        id: 1,
                    }]
                })
            })
    })

    it('updates a Reviewer given their id', () => {

        return request(app)
            .put('/api/v1/reviewers/1')
            .send({
                name: 'Sparkle Lord',
                company: 'In A Galaxy Far Away.. From You... Reviews.'
            })
            .then((res) => {
                expect(res.body).toEqual({
                    name: 'Sparkle Lord',
                    company: 'In A Galaxy Far Away.. From You... Reviews.',
                    id: 1
                })
            })
    })

    it('deletes a Reviewer given their id if they have 0 reviews', () => {

        return request(app)
            .delete('/api/v1/reviewers/1')
            .then((res) => {
                expect(res.body).toEqual({
                    success: '👻'
                })
            })
    })


});


