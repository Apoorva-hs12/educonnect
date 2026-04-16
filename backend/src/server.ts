import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { seedAdmin } from './utils/seedAdmin';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('EduConnect Backend API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Socket.io connection handler
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('join_class', (classId) => {
    socket.join(classId);
    console.log(`User ${socket.id} joined class: ${classId}`);
  });

  socket.on('send_message', (data) => {
    io.to(data.classId).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/educonnect';
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await seedAdmin();
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
