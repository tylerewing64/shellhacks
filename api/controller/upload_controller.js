
const {createTempFilePath, parsePdf} = require( '../services/handleFileUploadService')
const { compareJobs } = require('../services/chatCompletionService');
const handleUpload = async(req, res) => {  

    try{ 
        await createTempFilePath(req.files.file);
        const pdfData = await parsePdf(req.files.file.name)
        console.log(pdfData)
        const response = await compareJobs(pdfData);
        res.status(200).json(response);
    }catch(error){ 
        res.status(500).send('fail');
    }
    
 
    
}


module.exports = { 
    handleUpload
}