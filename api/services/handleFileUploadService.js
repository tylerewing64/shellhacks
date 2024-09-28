const path = require('path')
 const createTempFilePath = (file) => { 
    const destinationPath = path.join(__dirname, 'tmpfiles', file.name);
    file.mv(destinationPath, (err) => { 
        if(err){ 
            return false
        }
       
    })
    return true;
} 
module.exports = { 
    createTempFilePath
}