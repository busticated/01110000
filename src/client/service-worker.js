importScripts('/public/workbox-sw@1.3.0.js'); // TODO (mirande): https://github.com/GoogleChrome/workbox/issues/650

const wb = new self.WorkboxSW({ clientsClaim: true, skipWaiting: true });

wb.precache([]); // workbox injects manifest for static files here
wb.router.registerNavigationRoute('shell.html', { whitelist: [/./] });
wb.router.registerRoute('/api/libraries/(.*)', wb.strategies.networkFirst());
