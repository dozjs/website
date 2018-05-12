import {component} from 'doz'
import './style.css'
import logoUrl from '../../images/doz.png'

component('app-section', {
    template() {
        return `
            <section>
                <img class="logo" src="${logoUrl}" alt="DOZ logo">
                <p>A JavaScript framework for building UI</p>
            </section>
        `
    }
});