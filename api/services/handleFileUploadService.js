const path = require('path');
const fs  = require('fs');
const pdf = require('pdf-parse');



 const createTempFilePath = (file) => { 
    const destinationPath = path.join(__dirname, 'tmpfiles', file.name);
    return new Promise((resolve, reject) => {
        file.mv(destinationPath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(true);
        });
    });
    return true;
} 

const parsePdf = async(filename) => { 
    try{ 
    const dataBuffer = fs.readFileSync(path.join(__dirname, 'tmpfiles', filename));
    const data = await pdf(dataBuffer); 
    return data.text
    } catch(error){ 
        console.error(error)
    }
} 




module.exports = { 
    createTempFilePath, 
    parsePdf
}