const authorise = (req, res, next) => {

    console.log('authorising request');
    next();
};

module.exports = authorise;