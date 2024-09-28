const express = require('express');
const uploadRoutes = require('./routes/uploads')
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(fileUpload());





app.use('/api', uploadRoutes)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
