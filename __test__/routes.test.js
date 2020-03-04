/* eslint-disable  */

const request = require('supertest');

const app = require('../server/app');

test('test main route /',(done)=>{
  request(app)
  .get('/')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err,res)=>{
      if(err) return done(err)
      else done();
  })
})

  // test('test search route /add-post',(done)=>{
  //   request(app)
  //   .post('/add-post')
  //   .expect(200)
  //   .expect('Content-Type', /html/)
  //   .end((err,res)=>{
  //     if(err){
  //     return done(err)
  //     }
  //     else done();
          
  //   })
  // })

test('test error route 404',(done)=>{
    request(app)
    .get('/error')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err,res)=>{
        if(err) return done(err)
        else done();
    })
})


