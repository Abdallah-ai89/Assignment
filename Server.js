const express = require('express'); const cors = require('cors');

const app = express(); const PORT = 3000;

// Use CORS middleware app.use(cors());

// Use express.json() middleware to parse JSON request bodies app.use(express.json());

// Sample route app.post('/data', (req, res) => { console.log('Received data:', req.body); res.json({ message: 'Data received successfully', data: req.body }); });

// Additional route for GET requests app.get('/test', (req, res) => { res.json({ message: 'GET request successful' }); });

app.listen(PORT, () => { console.log(Server is running on http://localhost:${PORT}); });
