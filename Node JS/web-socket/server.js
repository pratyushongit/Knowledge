const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const port = process.env.PORT || 3000;

app.use('/static',express.static(path.join(__dirname,'/frontend/static')));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/frontend/index.html'));
})

const server = http.createServer(app);
const io = socketio(server);

let count = 0;

io.on('connection',(socket)=>{
    console.log('Client Connected');
    socket.on('increment',(data)=>{
        count++;
        // socket.emit('dataUpdate',count);
        io.emit('dataUpdate',count);
    });

    socket.broadcast.emit('dataUpdate','New User')
});

server.listen(port, ()=>{
    console.log('Server is up on port '+port);
});