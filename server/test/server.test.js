const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/Todo');

const data = [{
    _id: new ObjectID(),
    text: 'first todo test'
}, {
    _id: new ObjectID(),
    text: 'Second todo test'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => done()); //making sure the database is empty by deleting it and inserting the new test data
});

describe('Post /todos', () => { //put all tests in the same place 
    it('should create a new todo', (done) => {
        var text = 'test the send';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    done();
                }).catch((e) => done(e));
            })
    })
    it('should not creat todo with invaled body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .expect((res) => {
                expect(res.body.text).toBe(undefined);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done(e));
            })
    })
});

describe('Get /todos/', () => { // this one has a pending state
    it('should get all todos'), (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((todos) => {
                expect(todos.body.todos.length).toBe(2);
            })
            .end(done);
    };
    it('should return todo doc'), (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
        end(done);
    };
});