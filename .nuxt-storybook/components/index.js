export { default as Components } from '../..\\components\\index.vue'
export { default as BaseLink } from '../..\\components\\ui\\BaseLink.vue'
export { default as Button } from '../..\\components\\ui\\Button.vue'

export const LazyComponents = import('../..\\components\\index.vue' /* webpackChunkName: "components_index" */).then(c => c.default || c)
export const LazyBaseLink = import('../..\\components\\ui\\BaseLink.vue' /* webpackChunkName: "components_ui/BaseLink" */).then(c => c.default || c)
export const LazyButton = import('../..\\components\\ui\\Button.vue' /* webpackChunkName: "components_ui/Button" */).then(c => c.default || c)
