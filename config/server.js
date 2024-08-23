// config/server.js
module.exports = {
    settings: {
        keys: process.env.APP_KEYS.split(','),
    },
};