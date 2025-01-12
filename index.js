const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors('*'));
app.use(express.json());

// WebSocket connection setup (run once)
io.on('connection', (socket) => {
  console.log('Client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.get("/", (req, res)=>{
  res.send("Hiii How are YOu")
})

// POST endpoint to send notifications
app.post('/send', (req, res) => {
  const message = req.body.message;
  console.log('Message received:', message);

  // Emit the notification to all connected clients
  io.emit('pushNotification', { message });

  res.status(200).send({
    message: 'Sent Successfully',
  });
});

// Start the server
server.listen(5000, () => {
  console.log('Server is working on port 5000');
});
