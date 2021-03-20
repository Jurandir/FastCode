const fs = require('fs');

const createNewFile = ( dir, filename, txt ) => {
    
    let wfile = `${dir}/${filename}.js`

    fs.writeFile(wfile, txt, function (err) {
      if (err) return console.log(err)
    })

}

module.exports = createNewFile;