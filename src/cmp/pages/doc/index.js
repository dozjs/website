import {component} from 'doz'
//import style from './style.css'
import content from '../../../content/guide/'
import marked from 'marked'

component('app-page-doc', {
    template() {
        return `
            <div class="page">
                <div class="sidebar"></div>
                <div class="content">                
                    ${marked(this.$content)}
                </div>
            </div>
        `
    },

    onCreate() {
        const path = this.getCmp('router').$param('path') || 'index';
        this.$content = content[path];
    }
});