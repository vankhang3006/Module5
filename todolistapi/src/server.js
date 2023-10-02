const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors'); // Import thư viện cors

const server = express();

// Sử dụng cors
server.use(cors());

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});