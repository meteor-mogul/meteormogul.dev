// Declare routes.
import { MMDEBUG } from './imports.js';

// TODO: import an array of articles

import {
  mmContentHome,
  mmArticleOrientation, mmArticleSurvivalGuide, mmArticleToolKit,
  mmArticleFormulary, mmArticleBestiary, mmArticleMenagerie,
  mmArticleBazaar, mmArticleForum, mmArticleObservatory,
  mmDonations, mmHelp, mmCredits
} from './imports-ui.js';

MMDEBUG = true;

MMDEBUG && console.log("mmContentHome:", mmContentHome);
MMDEBUG && console.log("mmArticleOrientation:", mmArticleOrientation);

// TODO: programmatically construct paths to types of components
//       for example,
//       1) import an array of article components
//       2) forEach article, construct a path based on the name
//       3) push path and component on routes

// Declare routes...
const routes =
[
  { path: '/', component: mmContentHome },
  { path: '/index.html', component: mmContentHome },
  { path: '/orientation.html', component: mmArticleOrientation },
  { path: '/survivalguide.html', component: mmArticleSurvivalGuide },
  { path: '/toolkit.html', component: mmArticleToolKit },
  { path: '/formulary.html', component: mmArticleFormulary },
  { path: '/bestiary.html', component: mmArticleBestiary },
  { path: '/menagerie.html', component: mmArticleMenagerie },
  { path: '/bazaar.html', component: mmArticleBazaar },
  { path: '/forum.html', component: mmArticleForum },
  { path: '/observatory.html', component: mmArticleObservatory },
  { path: '/donations.html', component: mmDonations },
  { path: '/help.html', component: mmHelp },
  { path: '/credits.html', component: mmCredits }
];

routes.forEach(function(route) {
  route.component.path = route.path;
  console.log(route);
});

// ... then add them to the router ...
const mmRouter =
new VueRouter({
  routes // short for `routes: routes`
});

export { mmRouter };
