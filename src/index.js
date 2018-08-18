import 'babel-polyfill'
import 'doz/polyfill/proxy'
import Doz from 'doz'
import 'doz-router'
import 'animate.css'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
import './cmp/pages/style.css'
import './cmp/header'
import './cmp/pages/home'
import './cmp/pages/doc'
import './cmp/pages/doc/sidebar'
import './cmp/pages/example'
import './cmp/footer'

new Doz({
    root: '#root',
    template: `
        <div class="container-fluid">
            <app-header class="mb-auto"></app-header>
            <doz-router mode="history" d:id="router">
                <app-page-home route="/"></app-page-home>
                <app-page-doc route="/docs/*"></app-page-doc>
                <app-page-example route="/example"></app-page-example>
            </doz-router>
            <app-footer class="mastfoot mt-auto"></app-footer>
        </div>
    `
});

