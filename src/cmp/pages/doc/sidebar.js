import {component} from 'doz'

component('doc-sidebar', {
    template() {
        return `
            <ul d-ref="list">
                <li><a href="/docs/installation">Installation</a>
                    <ul>
                        <li><a href="/docs/installation#import-library">Import library</a></li>
                    </ul>
                </li>
                <li><a href="/docs/component-definition">Component definition</a>
                    <ul>
                        <li><a href="/docs/component-definition#props">Props</a></li>
                        <li><a href="/docs/component-definition#reusing-components">Reusing components</a></li>
                        <li><a href="/docs/component-definition#methods">Methods</a>
                            <ul>
                                <li><a href="/docs/component-definition#inherited">Inherited</a></li>
                            </ul>
                        </li>
                        <li><a href="/docs/component-definition#handlers">Handlers</a>
                            <ul>
                                <li><a href="/docs/component-definition#inline-logic">Inline logic</a></li>
                                <li><a href="/docs/component-definition#passing-arguments">Passing arguments</a></li>
                            </ul>
                        </li>
                        <li><a href="/docs/component-definition#emitter">Emitter</a></li>
                        <li><a href="/docs/component-definition#lifecycle-methods">Lifecycle methods</a></li>
                        <li><a href="/docs/component-definition#local-component">Local component</a></li>
                        <li><a href="/docs/component-definition#mount">Mount</a></li>
                        <li><a href="/docs/component-definition#directives">Directives</a>
                            <ul>
                                <li><a href="/docs/component-definition#html-element">HTML element</a>
                                    <ul>
                                        <li><a href="/docs/component-definition#d-bind">d-bind</a></li>
                                        <li><a href="/docs/component-definition#d-ref">d-ref</a></li>
                                    </ul>
                                </li>
                                <li><a href="/docs/component-definition#doz-component">DOZ component</a>
                                    <ul>
                                        <li><a href="/docs/component-definition#did">d:id</a></li>
                                        <li><a href="/docs/component-definition#dstore">d:store</a></li>
                                        <li><a href="/docs/component-definition#don">d:on</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="/docs/conditional-statements">Conditional statements</a></li>
                <li><a href="/docs/loops">Loops</a></li>
                <li><a href="/docs/scoped-style">Scoped style</a></li>
                <li><a href="/docs/inline-style">Inline style</a></li>
                <li><a href="/docs/actions">Actions</a></li>
                <li><a href="/docs/develop-and-production">Develop and production</a>
                    <ul>
                        <li><a href="/docs/develop-and-production#hot-module-replacement-and-state-preservation">Hot module replacement and state preservation</a></li>
                    </ul>
                </li>
                <li><a href="/docs/write-distributable-component">Write a distributable component</a></li>
            </ul>        
        `
    },

    onMount() {
        const currentPath = this.getCmp('router').$currentPath();
        this.ref.list.querySelectorAll('a').forEach(e => {
            //
            const path = e.hash
                ? `${e.pathname}${e.hash}`
                : e.pathname;
            //console.log(path, currentPath);
            if (path === currentPath)
                e.style.fontWeight = 'bold';
        });
    }
});