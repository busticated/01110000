import React from 'react';
import createClass from 'create-react-class';

const { svg, path } = React.DOM;


export default createClass({
    displayName: 'GlyphX',
    render(){
        return svg({ viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },
            path({ d: 'M99.8 6.5L93.3 0 49.9 43.4 6.5 0 0 6.5l43.4 43.4L0 93.3l6.5 6.5 43.4-43.4 43.4 43.4 6.5-6.5-43.4-43.4' })
        );
    }
});
