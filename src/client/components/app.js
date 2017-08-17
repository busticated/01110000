import React, { createFactory } from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Router from 'preact-router';
import { fetchLibraries, fetchLibrary } from '../api-client.js';
import LibrariesCollection from '../models/libraries.js';
import Home from './home.js';
import Libraries from './libraries.js';
import SDK from './library.js';

const { div } = React.DOM;
const router = createFactory(Router);
const home = createFactory(Home);
const libs = createFactory(Libraries);
const sdk = createFactory(SDK);


export default createClass({
    displayName: 'App',
    propTypes: {
        disablePrefetch: PropTypes.bool,
        initialLibraries: PropTypes.object
    },
    getDefaultProps(){
        return {
            pageSize: 6,
            disablePrefetch: false,
        };
    },
    getInitialState(){
        const { initialLibraries, pageSize } = this.props;
        const libraries = initialLibraries || new LibrariesCollection({ pageSize });
        return { libraries, lastPageFetched: 1, error: null };
    },
    componentWillMount(){
        const { disablePrefetch } = this.props;

        if (!disablePrefetch){
            this.fetchLibraries();
        }
    },
    fetchLibraries(){
        const { pageSize } = this.props;
        const { libraries, lastPageFetched } = this.state;

        this.setIsFetching();

        fetchLibraries({ page: lastPageFetched, limit: pageSize * 2 })
            .then(json => this.setState({
                libraries: libraries.addPage(json),
                lastPageFetched: lastPageFetched + 1,
                isFetching: false
            }))
            .catch(this.setError);
    },
    fetchLibrary(id){
        const { libraries } = this.state;

        this.setIsFetching();

        fetchLibrary(id)
            .then(json => this.setState({
                libraries: libraries.set(id, json),
                isFetching: false
            }))
            .catch(this.setError);
    },
    setIsFetching(){
        this.setState({ error: null, isFetching: true });
    },
    setError(error){
        this.setState({ error, isFetching: false });
    },
    pageForward(){
        const { libraries, lastPageFetched } = this.state;

        if (libraries.hasNextPage()){
            this.setState({ error: null, libraries: libraries.next() }, () => {
                if (!libraries.hasNextPage()){
                    this.fetchLibraries(lastPageFetched);
                }
            });
        }
    },
    pageBack(){
        const { libraries } = this.state;

        if (libraries.hasPreviousPage()){
            this.setState({ error: null, libraries: libraries.previous() });
        }
    },
    render(props, state){
        const { isFetching, libraries, error } = state;
        const { fetchLibrary } = this;

        return div({ className: 'app' },
            router(null,
                home({ path: '/' }),
                libs({
                    path: '/libs',
                    libraries,
                    showNextBtn: !isFetching,
                    onPageForward: this.pageForward,
                    onPageBack: this.pageBack,
                    showPreviousBtn: libraries.hasPreviousPage()
                }),
                sdk({
                    path: '/libs/:id',
                    libraries,
                    fetchLibrary
                })
            ),
            div({ className: `app-status ${error ? 'is-error' : ''}` },
                (isFetching ? 'fetching data...' : null),
                (error ? `whoops! ${error.message}` : null)
            )
        );
    }
});
