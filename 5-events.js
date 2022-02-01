const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('require', () => {
    console.log('Received Events');
});

customEmitter.emit('require');