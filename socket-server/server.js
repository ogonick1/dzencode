// server.js
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

let activeSessions = 0;

io.on('connection', (socket) => {
  activeSessions++;
  io.emit('activeSessions', activeSessions);

  console.log('Новое подключение:', activeSessions);

  socket.on('disconnect', () => {
    activeSessions--;
    io.emit('activeSessions', activeSessions);

    console.log('Отключение клиента:', activeSessions);
  });
});

server.listen(3000, () => {
  console.log('Сервер Socket.io запущен на http://localhost:3000');
});
