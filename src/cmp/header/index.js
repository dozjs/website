import {component} from 'doz'
import style from './style.css'
import logoUrl  from '../../images/doz-mono.svg'

component('app-header', {
    store: 'header',
    props : {
        logoOpacity: 1
    },
    template() {
        return `
            <header class="${style.header}">
                <div class="inner">
                    <h1 class="${style.logoWrapper}"><img style="opacity: ${this.props.logoOpacity}" class="${style.logo}" src="${logoUrl}"></h1>
                    <nav class="nav ${style.navMasthead} justify-content-center">
                        <a router-link class="nav-link" href="/">Home</a>
                        <a router-link class="nav-link" href="/example">Example</a>
                        <a router-link class="nav-link" href="/docs">Documentation</a>
                        <a class="nav-link" href="https://github.com/dozjs/doz/">GitHub</a>
                    </nav>
                </div>
            </header>
        `
    }
});