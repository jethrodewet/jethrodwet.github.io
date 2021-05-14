// import Vue from 'vue'
// import Router from 'vue-router'
// import { normalizeURL, decode } from 'ufo'
// import { interopDefault } from './utils'
// import scrollBehavior from './router.scrollBehavior.js'

// const _7b8f727c = () => interopDefault(import('../pages/claim-prize.vue' /* webpackChunkName: "pages/claim-prize" */))
// const _53f6ef29 = () => interopDefault(import('../pages/enter-promotion.vue' /* webpackChunkName: "pages/enter-promotion" */))
// const _6a09862c = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
// const _ba7b2c94 = () => interopDefault(import('../pages/prizes.vue' /* webpackChunkName: "pages/prizes" */))
// const _20c52c02 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
// const _980d4b36 = () => interopDefault(import('../pages/test-page.vue' /* webpackChunkName: "pages/test-page" */))
// const _0cb68444 = () => interopDefault(import('../pages/thanks.vue' /* webpackChunkName: "pages/thanks" */))
// const _e061b568 = () => interopDefault(import('../pages/two-prize.vue' /* webpackChunkName: "pages/two-prize" */))
// const _76c76dcd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// const emptyFn = () => {}

// Vue.use(Router)

// const router = new Router = {
//   mode: 'history',
//   base: '/',
//   linkActiveClass: 'nuxt-link-active',
//   linkExactActiveClass: 'nuxt-link-exact-active',
//   scrollBehavior,

//   routes: [{
//     path: "/claim-prize",
//     component: _7b8f727c,
//     name: "claim-prize",
//     meta: {requiresAuth: true}
//   }, {
//     path: "/enter-promotion",
//     component: _53f6ef29,
//     name: "enter-promotion"
//   }, {
//     path: "/privacy-policy",
//     component: _6a09862c,
//     name: "privacy-policy"
//   }, {
//     path: "/prizes",
//     component: _ba7b2c94,
//     name: "prizes"
//   }, {
//     path: "/terms",
//     component: _20c52c02,
//     name: "terms"
//   }, {
//     path: "/test-page",
//     component: _980d4b36,
//     name: "test-page"
//   }, {
//     path: "/thanks",
//     component: _0cb68444,
//     name: "thanks"
//   }, {
//     path: "/two-prize",
//     component: _e061b568,
//     name: "two-prize"
//   }, {
//     path: "/",
//     component: _76c76dcd,
//     name: "index"
//   }],

//   fallback: false
// }

// export function createRouter (ssrContext, config) {
//   const base = (config._app && config._app.basePath) || routerOptions.base
//   const router = new Router({ ...routerOptions, base  })

//   // TODO: remove in Nuxt 3
//   const originalPush = router.push
//   router.push = function push (location, onComplete = emptyFn, onAbort) {
//     return originalPush.call(this, location, onComplete, onAbort)
//   }

//   const resolve = router.resolve.bind(router)
//   router.resolve = (to, current, append) => {
//     if (typeof to === 'string') {
//       to = normalizeURL(to)
//     }
//     return resolve(to, current, append)
//   }

//   return router
// }
// router.beforEach((to, from, next) => {})
// export default router;