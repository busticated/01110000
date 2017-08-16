/*eslint no-console:0*/
const levels = ['log', 'debug', 'info', 'warn', 'error'];
const { log, debug, info, warn, error } = levels.reduce((obj, level) => {
    obj[level] = (...args) => { console[level](...args); };
    return obj;
}, {});

export { log as default, debug, info, warn, error };
