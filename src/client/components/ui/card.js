import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

const { div, h1, h3, p, a, table, thead, tbody, tr, td } = React.DOM;


export default createClass({
    displayName: 'LibraryCard',
    propTypes: {
        className: PropTypes.string.isRequired,
        library: PropTypes.object.isRequired
    },
    getSafeHref(url){
        let parts;

        try {
            parts = new URL(url);
        } catch(e){ return; }


        return parts.protocol.startsWith('http') ? url : null;
    },
    renderHeaderRows(attributes){
        const { name, url, author, repository, sentence } = attributes;
        const href = this.getSafeHref(url);
        const repoHref = this.getSafeHref(repository);

        return tr(null,
            td({ colspan: 2 },
                h1(null, name),
                p(null, sentence, ` by ${author} `), // TODO (mirande): linkify email
                p(null,
                    href ? a({ href, target: '_blank' }, '[url]') : '', // TODO (mirande): use icons?
                    ' ',
                    repoHref ? a({ href: repoHref, target: '_blank' }, '[repo]') : ''
                )
            )
        );
    },
    renderContentRows(className, attributes){
        const keys = Object.keys(attributes).sort();
        const keysToOmit = ['author', 'mine', 'name', 'repository', 'sentence', 'url'];

        return keys
            .filter(key => !keysToOmit.includes(key))
            .map(key => {
                const val = attributes[key];

                return tr({ className: `${className}-row-${key.toLowerCase()}` },
                    td(null, h3(null, key)),
                    td(null, p(null, val))
                );
            });
    },
    render(props){
        const { className, library } = props;
        const attrs = library.attributes;
        const { download } = library.links;
        const downloadHref = this.getSafeHref(download);

        return div({ className },
            table(null,
                thead(null,
                    this.renderHeaderRows(attrs)
                ),
                tbody(null,
                    this.renderContentRows(className, attrs)
                )
            ),
            (downloadHref && a({
                className: `${className}-download-btn`,
                href: downloadHref,
                download: true,
                children: 'download'
            }))
        );
    }
});
