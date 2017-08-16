/*eslint no-console:0*/
const levels = ['log', 'debug', 'info', 'warn', 'error'];
const { log, debug, info, warn, error } = levels.reduce((obj, level) => {
    obj[level] = (...args) => { console[level](...args); };
    return obj;
}, {});


module.exports = log;
module.exports.debug = debug;
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
