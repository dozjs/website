import {component} from 'doz'
//import style from './style.css'
import content from '../../../content/guide/'
import marked from 'marked'

component('app-page-doc', {

    template() {
        return `
            <div class="page">
                <div class="sidebar">
                    <doc-sidebar></doc-sidebar>
                </div>
                <div class="content">                
                    ${marked(this.$content)}
                </div>
            </div>
        `
    },

    onCreate() {
        let path = this.getCmp('router').$currentPath();
        path = path.split('/')[2] || 'index';
        this.$content = content[path] || 'Page not found';
    }

});