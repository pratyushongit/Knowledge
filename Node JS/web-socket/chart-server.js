const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 3000; 

app.use('/static',express.static(path.join(__dirname,'/frontend/static')));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/frontend/index.html'));
});

io.on('connection',(socket)=>{
    console.log('New Client Connected');
    setInterval(() => {
        dataUpdate(socket);
    }, 2000);    
});

const dataUpdate = function(socket){
    let value = Math.floor(Math.random()*10)+1;
    socket.emit('dataUpdate',value)
}

server.listen(port,()=>{
    console.log('Server Up on port '+ port);
});