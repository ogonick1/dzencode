const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

app.use('/api/auth', authRoutes);

const server = http.createServer(app);

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const SOCKET_PORT = 3000;
server.listen(SOCKET_PORT, () => {
  console.log(`Socket.IO Server running on http://localhost:${SOCKET_PORT}`);
});