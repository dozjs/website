import {component} from 'doz'
//import style from './style.css'
import content from '../../../content/guide/index.md'

component('app-page-doc', {
    template() {
        return `
            <div class="page">
                ${content}
            </div>
        `
    }
});