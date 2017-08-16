module.exports = function shellHTML(model = {}){
    return `
        <!doctype html>
        <html lang="en">
            <head>
                <title>${model.title}</title>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no">
                <link type="image/x-icon" rel="shortcut icon" href="${model.favicon}">
            </head>
            <body>
                <div id="root"></div>
                <script src="${model.js}"></script>
            </body>
        </html>
    `;
};
