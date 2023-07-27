// Import dependencies
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const dbConnect = require('./config/dbConnect');

// Get dbConnect
dbConnect();

// Configurations
dotenv.config();

// Express and HTTP server setup
const app = express();
const server = http.createServer(app);

// Socket.io setup
const io = socketIo(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
});

// Middleware setup
app.use(cors());
app.use(express.json());

// import routes
const videoRoutes = require('./routes/videos');
const productRoutes = require('./routes/products');
const commentRoutes = require('./routes/comments');

// Apply routes
app.use('/videos', videoRoutes);
app.use('/products', productRoutes);
app.use('/comments', commentRoutes);

// Export io instance for use in routes
module.exports = io;

// Event Emitter setup
const myEmitter = require('./event');

myEmitter.on('newComment', (comments) => {
  io.emit('comments', comments);
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started on port ${port}`));
