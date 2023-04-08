

const socketController = (socket) => {
    console.log('Cliente conectado id: ', socket.id);

    socket.on('disconnect', ()=> {
      console.log('Cliente desconectado id: ', socket.id);
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
      
      const id = 123456;
      callback( id );
      socket.broadcast.emit('enviar-mensaje', payload);


    });

  }

module.exports = {
    socketController
}