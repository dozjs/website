import {component} from 'doz'
import style from './style.css'
import logoUrl from '../../../images/doz.png'
import './example'

component('app-page-home', {
    template() {
        return `
            <div>
                <img class="${style.logo}" src="${logoUrl}" alt="Doz logo">
                <h1 class="${style.slogan}">A JavaScript framework<br/>for building UI</h1>
                <p class="lead">
                    <a href="https://github.com/dozjs/doz#installation" class="btn btn-lg btn-primary">Get started</a>
                </p>
                <app-example></app-example>
            </div>
        `
    }
});