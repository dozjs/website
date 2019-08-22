import {component} from 'doz'
import './style.css'
import logoUrl from '../../images/doz.png'
import './example'

component('app-main', {
    template(h) {
        return h`
            <main role="main">
                <img class="logo" src="${logoUrl}" alt="Doz logo">
                <h1 class="slogan">The optimistic JavaScript framework<br/>for building UI</h1>
                <p class="lead">
                    <a href="https://github.com/dozjs/doz#installation" class="btn btn-lg btn-primary">Get started</a>
                </p>
                <app-example></app-example>
            </main>
        `
    }
});