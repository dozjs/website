import {component} from 'doz'
import style from './style.css'

component('app-footer', {
    template() {
        return `
            <footer class="${style.footer}">
                <p>Built with passion by <a href="http://rica.li">Fabio Ricali</a>.</p>
            </footer>
        `
    }
});