import React from 'react';
import createClass from 'create-react-class';

const { main, section, div } = React.DOM;


export default createClass({
    displayName: 'ViewLayout',
    getDefaultProps(){
        return { className: 'layout' };
    },
    render(props){
        const { className } = props;

        return div({ className },
            main(null,
                section({ className: `${className}-content` },
                    props.children
                )
            )
        );
    }
});
