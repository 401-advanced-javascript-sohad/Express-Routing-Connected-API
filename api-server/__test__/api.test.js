'use strict';
const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

<<<<<<< HEAD
describe('Categories >>>> CRUD', () => {
  it('post a new categorie item', () => {
=======
describe('Categories  CRUD', () => {
  it('post a new categorie ', () => {
    
>>>>>>> 92c5a3bf8115d7096d15bf95a0277cb113208095
    let testObj = { name: 'test name', display_name: 'test display_name', description: 'test description' };
    return mockRequest.post('/api/v1/categories')
      .send(testObj)
      .then(data => {
        let record = data.body;
        console.log('record : ', record._id);
        Object.keys(testObj).forEach(key => {
          expect(record[key]).toEqual(testObj[key]);
        });
      })
  });

<<<<<<< HEAD
  // it('get a new categorie item', () => {
   

  //   let testObj = { name: 'test name', display_name: 'test display_name', description: 'test description' };
  //   return mockRequest.post('/api/v1/categories')
  //     .send(testObj)
  //     .then(data => {
  //       let record = data.body;
  //       let id =record.id;
  //       console.log('record : ', record._id);
  //       return id;
  //     })


  // });

=======
>>>>>>> 92c5a3bf8115d7096d15bf95a0277cb113208095

  
});