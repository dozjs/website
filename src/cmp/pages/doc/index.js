import {component} from 'doz'
//import style from './style.css'
import content from '../../../content/guide/index.md'
import marked from 'marked'

component('app-page-doc', {
    template() {
        return `
            <div class="page">
                ${marked(content)}
            </div>
        `
    }
});