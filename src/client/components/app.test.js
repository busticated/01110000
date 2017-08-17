import { expect } from 'chai';
import { sandbox as Sandbox } from 'sinon';
import { render, createElement } from 'preact';
import { getLibrariesResponseJSON } from '../_test/data.js';
import LibrariesCollection from '../models/libraries.js';
import App from './app.js';

const sandbox = Sandbox.create();


describe('Component: App', function(){
    let rootEl;

    beforeEach(() => {
        window.history.replaceState(null, null, '/');
        rootEl = document.createElement('div');
        document.body.appendChild(rootEl);
    });

    afterEach(() => {
        rootEl.innerHTML = '';
        rootEl.parentNode.removeChild(rootEl);
        sandbox.restore();
    });

    it('renders home view', () => {
        window.history.replaceState(null, null, '/');
        mount(App, { disablePrefetch: true }, rootEl);

        expect($('.home')).to.have.lengthOf(1);
        expect($('.home-content')).to.have.lengthOf(1);
    });

    it('renders the libraries list view', () => {
        window.history.replaceState(null, null, '/libs');
        const json = getLibrariesResponseJSON();
        const libs = new LibrariesCollection({ pageSize: 2 }).addPage(json);
        mount(App, { initialLibraries: libs, disablePrefetch: true }, rootEl);

        expect($('.libs')).to.have.lengthOf(1);
        expect($('.libs-list li')).to.have.lengthOf(2);
    });

    it('renders a librry detail view', () => {
        window.history.replaceState(null, null, '/libs/blynk');
        const json = getLibrariesResponseJSON();
        const libs = new LibrariesCollection({ pageSize: 2 }).addPage(json);
        mount(App, { initialLibraries: libs, disablePrefetch: true }, rootEl);

        expect($('.sdk')).to.have.lengthOf(1);
        expect($('.sdk-card')).to.have.lengthOf(1);
        expect($('.sdk-card table h1')).to.have.lengthOf(1);
        expect($('.sdk-card table h1')[0]).to.have.property('innerHTML', 'blynk');
    });

    function mount(Component, props, rootEl = document.createElement('div')){
        return render(createElement(Component, props), rootEl);
    }

    function $(selector){
        return document.querySelectorAll(selector);
    }
});
