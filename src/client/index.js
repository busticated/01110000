import { createElement } from 'react';
import { render } from 'react-dom';
import App from './components/app.js';


if (navigator.serviceWorker){
    navigator.serviceWorker.register('/public/sw.js', { scope: '/' })
        .catch(function(err) {
            console.error('Unable to register service worker.', err); // eslint-disable-line no-console
        });
}

render(
    createElement(App),
    document.getElementById('root')
);
