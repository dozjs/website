import {component} from 'doz'
import './style.css'

component('app-footer', {
    template(h) {
        return h`
        <footer>
            <div class="inner">
                <p>Built with passion by <a href="http://rica.li">Fabio Ricali</a>.</p>
            </div>
        </footer>
    `
    }
});