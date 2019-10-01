const db = require('../db');

//table {name:..., description: ...}
module.exports.get = (callback) => {
  //return all info in cows
  db.query('select * from cows', (err, result) => {
    if(err) { throw err; }
    callback(result);
  })
};

module.exports.post = (name, description, callback) => {
  //insert value in to cows
  db.query('insert into cows (name, description) value (?, ?)',[name, description], (err, result) => {
    callback(err, result);
  })
}