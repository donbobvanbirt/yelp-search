// Clog model

const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, '../data/clogs.json');



// getAll = read from file, parse the data
// write = stringigy some data, write the data string to the filename

// create - push new item



exports.write = function(newData, cb) {
  let json = JSON.stringify(newData);

  fs.writeFile(filename, json, cb);
}

exports.create = function(newItem, cb) {

  exports.getAll((err, items) => {
    if(err) return cb(err);

    items.push(newItem);

    exports.write(items, cb);
  })

}
