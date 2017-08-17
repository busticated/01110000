import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

const { div, h2, p, ul, li } = React.DOM;


export default createClass({
    displayName: 'LibrariesList',
    propTypes: {
        className: PropTypes.string.isRequired,
        page: PropTypes.array.isRequired,
        renderLibraryLink: PropTypes.func.isRequired
    },
    renderItems(props){
        const { className, page, renderLibraryLink } = props;

        return page.map(lib => li(null,
            div({ className: `${className}-item-left` },
                h2(null, lib.attributes.name),
                p(null, lib.attributes.sentence)
            ),
            div({ className: `${className}-item-right` },
                renderLibraryLink(lib)
            )
        ));
    },
    render(props){
        const { className } = props;

        return ul({ className },
            this.renderItems(props)
        );
    }
});

