import './header'
import './section'
import './footer'
import Doz from 'doz'

new Doz({
    root: '#root',
    template: `
        <div class="container">
            <app-header></app-header>
            <app-section></app-section>
            <app-footer></app-footer>
        </div>
    `
});
