import './header'
import './main'
import './footer'
import Doz from 'doz'

new Doz({
    root: '#root',
    template: `
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <app-header class="masthead mb-auto"></app-header>
            <app-main class="inner cover"></app-main>
            <app-footer class="mastfoot mt-auto"></app-footer>
        </div>
    `
});
