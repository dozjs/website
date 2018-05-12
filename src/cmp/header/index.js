import {component} from 'doz'
import './style.css'

component('app-header', {
    template() {
        return `
            <header>
                <nav>Example | Documentation | GitHub</nav>
            </header>
        `
    }
});