const convict = require('convict');
const pkg = require('../package.json');

module.exports = convict({
    name: pkg.name,
    version: {
        doc: 'application version',
        default: pkg.version,
        format: String
    },
    port: {
        doc: 'application server\'s port',
        default: 3000,
        format: 'port',
        env: 'PORT'
    },
    paths: {
        public: {
            doc: 'public directory used to serve static files',
            default: './public',
            format: String,
            env: 'PATHS_PUBLIC'
        },
        clientSrc: {
            doc: 'location of client application files',
            default: './src/client',
            format: String,
            env: 'PATHS_CLIENT_SRC'
        }
    }
});
