if (navigator.serviceWorker){
    navigator.serviceWorker.register('/public/sw.js', { scope: '/' })
        .catch(function(err) {
            console.error('Unable to register service worker.', err); // eslint-disable-line no-console
        });
}
