// Declare routes.
import { MMDEBUG } from './imports.js';
import {
  mmContentHome,
  mmArticles,
  mmDonations, mmHelp, mmCredits
} from './imports-ui.js';

// MMDEBUG = true;
MMDEBUG && console.log("mmContentHome:", mmContentHome);
MMDEBUG && console.log("mmArticles:", mmArticles);
MMDEBUG && console.log("mmNotices:", mmNotices);

// A route is a path to a component
// Route components are defined in client/ui/views

// Declare routes...
var routes =
[
  { path: '/', component: mmContentHome },
  { path: '/index.html', component: mmContentHome },
  { path: '/donations.html', component: mmDonations },
  { path: '/help.html', component: mmHelp },
  { path: '/credits.html', component: mmCredits }
];

// (each article knows its own path)
mmArticles.forEach(function(article) {
  routes.push({ path: article.path, component: article });
});

// MMDEBUG = true;
MMDEBUG && console.log('routes: ', routes);

// ... then add them to the router ...
const mmRouter =
new VueRouter({
  routes, // short for `routes: routes`
  // make the page scroll to top for all route navigations
  // See https://router.vuejs.org/en/advanced/scroll-behavior.html
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export { mmRouter };
