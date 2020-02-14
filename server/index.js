const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3002;

const router = require('./router');

const app = express();
// initialize server
const server = http.createServer(app);
// instance of socket io and pass in server
const io = socketio(server);

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
