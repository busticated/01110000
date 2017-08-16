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
    }
});
