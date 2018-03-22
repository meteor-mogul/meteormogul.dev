articles// Declare routes.
import { MMDEBUG } from './imports.js';
import { mmContentHome } from './ui/contents/home.js';
import { mmArticleOrientation } from './ui/contents/articles/orientation.js';
import { mmArticleSurvivalGuide } from './ui/contents/articles/survivalguide.js';
import { mmArticleToolKit } from './ui/contents/articles/toolkit.js';
import { mmArticleFormulary } from './ui/contents/articles/formulary.js';
import { mmArticleBestiary } from './ui/contents/articles/bestiary.js';
import { mmArticleMenagerie } from './ui/contents/articles/menagerie.js';
import { mmArticleBazaar } from './ui/contents/articles/bazaar.js';
import { mmArticleForum } from './ui/contents/articles/forum.js';
import { mmArticleObservatory } from './ui/contents/articles/observatory.js';

MMDEBUG && console.log("mmContentHome:", mmContentHome);

// Templates must have one enclosing tag.
// const HomePage = { template: '<span><v-icon>mood</v-icon> Home Page</span>'};
// const Orientation = { template: '<span><v-icon>mood</v-icon> Orientation</span>'};
// const SurvivalGuide = { template: '<span><v-icon>mood_bad</v-icon> Survival Guide</span>'};
// const Toolkit = { template: '<span><v-icon>build</v-icon> Toolkit</span>'};
// const Formulary = { template: '<span><v-icon>palette</v-icon> Formulary</span>'};
// const Bestiary = { template: '<span><v-icon>bug_report</v-icon> Bestiary</span>'};
// const Menagerie = { template: '<span><v-icon>pets</v-icon> Menagerie</span>'};


// Declare routes...
const routes =
[
  { path: '/', component: mmContentHome },
  { path: mmContentHome.path, component: mmContentHome },
  { path: '/orientation.html', component: mmArticleOrientation },
  { path: '/survivalguide.html', component: mmArticleSurvivalGuide },
  { path: '/toolkit.html', component: mmArticleToolKit },
  { path: '/formulary.html', component: mmArticleFormulary },
  { path: '/bestiary.html', component: mmArticleBestiary },
  { path: '/menagerie.html', component: mmArticleMenagerie },
  { path: '/bazaar.html', component: mmArticleBazaar },
  { path: '/forum.html', component: mmArticleForum },
  { path: '/observatory.html', component: mmArticleObservatory }
];

// ... then add them to the router ...
const mmRouter =
new VueRouter({
  routes // short for `routes: routes`
});

export { mmRouter };
