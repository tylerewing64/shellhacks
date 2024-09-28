
const {createTempFilePath} = require( '../services/handleFileUploadService')
const handleUpload = async(req, res) => {  

    const response = createTempFilePath(req.files.file);
    
    if(response === true){ 
        return res.status(200).send('file received');
    }
        return res.status(500).send('Error reading file')
    
}


module.exports = { 
    handleUpload
}