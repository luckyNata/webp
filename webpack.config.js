const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
    module.exports = require('./config/webpack.dev');
} else {
    module.exports = require('./config/webpack.prod');
}

