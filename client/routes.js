// Declare routes.
import { MMDEBUG } from './imports.js';
import {
  mmContentHome,
  mmArticleOrientation, mmArticleSurvivalGuide, mmArticleToolKit,
  mmArticleFormulary, mmArticleBestiary, mmArticleMenagerie,
  mmArticleBazaar, mmArticleForum, mmArticleObservatory,
  mmDonations, mmHelp, mmCredits
} from './imports-ui.js';

MMDEBUG && console.log("mmContentHome:", mmContentHome);

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

// ... then add them to the router ...
const mmRouter =
new VueRouter({
  routes // short for `routes: routes`
});

export { mmRouter };
