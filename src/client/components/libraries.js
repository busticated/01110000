import React, { createFactory } from 'react';
import { Link } from 'preact-router/match';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Layout from './ui/layout.js';
import BusyIndicator from './ui/busy.js';
import LibrariesList from './ui/list.js';

const { div, h1, hr, button } = React.DOM;
const link = createFactory(Link);
const layout = createFactory(Layout);
const busy = createFactory(BusyIndicator);
const list = createFactory(LibrariesList);


export default createClass({
    displayName: 'LibrariesView',
    className: 'libs',
    propTypes: {
        libraries: PropTypes.object.isRequired,
        showNextBtn: PropTypes.bool.isRequired,
        showPreviousBtn: PropTypes.bool.isRequired,
        onPageForward: PropTypes.func.isRequired,
        onPageBack: PropTypes.func.isRequired
    },
    renderLibraryLink(lib){
        const className = this.className;

        return link({
            href: `/libs/${lib.id.toLowerCase()}`,
            className: `${className}-detail-btn`,
            children: 'view'
        });
    },
    render(props){
        const className = this.className;
        const { libraries, showNextBtn, showPreviousBtn, onPageForward, onPageBack } = props;

        if (!libraries || !libraries.count()){
            return layout({ className },
                busy({ className: `${className}-busy` })
            );
        }

        let page = libraries.currentPage();

        return layout({ className },
            h1(null, 'Firmware Libraries'),
            hr(),
            list({
                className: `${className}-list`,
                page,
                renderLibraryLink: this.renderLibraryLink
            }),
            div({ className: `${className}-ctrls` },
                button({
                    className: `${className}-prev-btn`,
                    disabled: !showPreviousBtn,
                    onClick: onPageBack,
                    children: 'Previous'
                }),
                button({
                    className: `${className}-next-btn`,
                    disabled: !showNextBtn,
                    onClick: onPageForward,
                    children: 'Next'
                })
            )
        );
    }
});
