import Quasar from 'quasar'
import RkRedirect from './components/RkRedirect.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // additional routes
  router.addRoutes([
    { path: '/redirect/:parseUrl(\[\\w:\\/._-\]+)', props: true, component: RkRedirect }
  ])

  if (!isServer) {
    Vue.use(Quasar)
  }
}