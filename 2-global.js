const os = require('os');

const currentOS = {
    name: os.type(),
    releas: os.release(),
    totalMemeory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(currentOS);