const express = require('express'); 
const router = express.Router();
const upload_controller  = require('../controller/upload_controller')
 
router.post('/upload', upload_controller.handleUpload);

module.exports = router;
