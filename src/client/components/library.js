import { createFactory } from 'react';
import { route } from 'preact-router';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Layout from './ui/layout.js';
import BusyIndicator from './ui/busy.js';
import Card from './ui/card.js';
import CloseBtn from './buttons/close.js';

const layout = createFactory(Layout);
const busy = createFactory(BusyIndicator);
const card = createFactory(Card);
const closeBtn = createFactory(CloseBtn);


export default createClass({
    displayName: 'SDKView',
    className: 'sdk',
    propTypes: {
        id: PropTypes.string.isRequired,
        libraries: PropTypes.object.isRequired,
        fetchLibrary: PropTypes.func.isRequired
    },
    componentDidMount(){
        const { id, fetchLibrary } = this.props;
        const lib = this.getLibraryById(id);

        if (!lib){
            fetchLibrary(id);
        }
    },
    getLibraryById(id){
        const { libraries } = this.props;
        return libraries.get(id);
    },
    close(){
        route('/libs');
    },
    render(props){
        const className = this.className;
        const { id } = props;
        const library = this.getLibraryById(id);

        return layout({ className },
            (library ? card({
                className: `${className}-card`,
                library
            }) : busy({
                className: `${className}-busy`
            })),
            closeBtn({
                className: `${className}-close-btn`,
                onClick: this.close
            })
        );
    }
});
