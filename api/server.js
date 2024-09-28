const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
