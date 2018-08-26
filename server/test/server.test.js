const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/Todo');

const todos = [{
    _id: new ObjectID(),
    text: 'first todo test'
}, {
    _id: new ObjectID(),
    text: 'Second todo test'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
    }).then(() => done());
  });

describe('Post /todos', () => { 
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
                    expect(todos.length).toBe(3);
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
                }).catch((e) => done());
            })
    })
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
          expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(todos[0].text);
        })
        .end(done);
    });

    it('Should return 404 if todo is not found', (done) => {
        request(app)
        .get(`/todos/${_id= new ObjectID().toHexString()}`)
        .expect(404)
        .end(done);
    });
    it('Should return 404 of the id is not valid' , (done) => {
     request(app)
       .get(`/todos/123ac`)
       .expect(404)
       .end(done);
    });
});
