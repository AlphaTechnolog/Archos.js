const router = require('../../archos/Saved/Router');
const { ViewRouter } = router;
const controller = require('../../archos/lib/controller');

/**
 * Register your views in this file.
 * The addresses doesn't contain a prefix, it is raw path
 * 
 * @example If your route is '/' the route path is: '/'
 * @example If your route is /hello/world/ the route path is: '/hello/world/'
 */

ViewRouter.get('/', () => {
  return controller.call('Home');
});
