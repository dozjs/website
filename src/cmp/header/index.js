import {component} from 'doz'
import style from './style.css'

component('app-header', {
    template() {
        return `
            <header class="${style.header}">
                <div class="inner">
                    <!--h1 class="masthead-brand h3">doz</h1-->
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link" href="https://dozjs.github.io/doz/example/">Example</a>
                        <a class="nav-link" href="https://github.com/dozjs/doz#installation">Get started</a>
                        <a class="nav-link" href="https://github.com/dozjs/doz/blob/master/documentation/index.md">Documentation</a>
                        <a class="nav-link" href="https://github.com/dozjs/doz/">GitHub</a>
                    </nav>
                </div>
            </header>
        `
    }
});