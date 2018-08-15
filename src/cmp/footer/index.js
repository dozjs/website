import {component} from 'doz'
import style from './style.css'

component('app-footer', {
    template() {
        return `
            <footer class="${style.footer}">
                <div class="inner">
                  <p>Built with passion by <a href="http://rica.li">Fabio Ricali</a>.</p>
                </div>
            </footer>
        `
    }
});