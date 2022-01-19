const Renderer = require('./components/Renderer.vue');

const LsRenderer = {
    install(Vue) {
        Vue.component('LsThemeRenderer', Renderer);
    }
}

export default LsRenderer;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(LsRenderer);
}
