import './header'
import './main'
import './footer'
import Doz from 'doz'
import snap from 'doz-snap/plugin'

Doz.use(snap);

new Doz({
    root: '#root',
    template(h) {
        return h`
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <app-header class="masthead mb-auto"></app-header>
                <app-main class="inner cover"></app-main>
                <app-footer class="mastfoot mt-auto"></app-footer>
            </div>
        `
    },
    onMount() {
        if (window.SSR)
            window.SSR.ready();
    }
});
