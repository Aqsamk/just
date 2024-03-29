const { Socket } = require('socket.io');

//node server which will handle sochet io
const io = require('socket.io')(8000)



const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined',name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined')
    });
    socket.on('send',message => {
        socket.broadcast.emit('receive',{message:message, name: users[socket.id]});
    });
});