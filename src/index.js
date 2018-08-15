import 'babel-polyfill'
import 'doz/polyfill/proxy'
import Doz from 'doz'
import DozRouter from 'doz-router'
import 'animate.css'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
import './cmp/header'
import './cmp/pages/home'
import './cmp/pages/doc'
import './cmp/footer'

Doz.component('doz-router', DozRouter);

new Doz({
    root: '#root',
    template: `
        <div class="container">
            <app-header class="masthead mb-auto"></app-header>
            <doz-router mode="history">
                <app-page-home route="/"></app-page-home>
                <app-page-doc route="/documentation"></app-page-doc>
            </doz-router>
            <app-footer class="mastfoot mt-auto"></app-footer>
        </div>
    `
});

