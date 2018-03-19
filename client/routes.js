// Declare routes.
import { MMDEBUG } from './imports.js';
import { mmContentHome } from './ui/contents/home.js';
import { mmContentOrientation } from './ui/contents/orientation.js';
import { mmContentSurvivalGuide } from './ui/contents/survivalguide.js';
import { mmContentToolKit } from './ui/contents/toolkit.js';
import { mmContentFormulary } from './ui/contents/formulary.js';
import { mmContentBestiary } from './ui/contents/bestiary.js';
import { mmContentMenagerie } from './ui/contents/menagerie.js';
import { mmContentBazaar } from './ui/contents/bazaar.js';
import { mmContentForum } from './ui/contents/forum.js';
import { mmContentObservatory } from './ui/contents/observatory.js';

MMDEBUG && console.log("mmContentHome:", mmContentHome);

// Templates must have one enclosing tag.
// const HomePage = { template: '<span><v-icon>mood</v-icon> Home Page</span>'};
// const Orientation = { template: '<span><v-icon>mood</v-icon> Orientation</span>'};
// const SurvivalGuide = { template: '<span><v-icon>mood_bad</v-icon> Survival Guide</span>'};
// const Toolkit = { template: '<span><v-icon>build</v-icon> Toolkit</span>'};
// const Formulary = { template: '<span><v-icon>palette</v-icon> Formulary</span>'};
// const Bestiary = { template: '<span><v-icon>bug_report</v-icon> Bestiary</span>'};
// const Menagerie = { template: '<span><v-icon>pets</v-icon> Menagerie</span>'};


// Declare Happy and Sad routes...
const routes =
[
  { path: '/', component: mmContentHome },
  { path: '/orientation', component: mmContentOrientation },
  { path: '/survivalguide', component: mmContentSurvivalGuide },
  { path: '/toolkit', component: mmContentToolKit },
  { path: '/formulary', component: mmContentFormulary },
  { path: '/bestiary', component: mmContentBestiary },
  { path: '/menagerie', component: mmContentMenagerie },
  { path: '/bazaar', component: mmContentBazaar },
  { path: '/forum', component: mmContentForum },
  { path: '/observatory', component: mmContentObservatory }
];

// ... then add them to the router ...
const mmRouter =
new VueRouter({
  routes // short for `routes: routes`
});

export { mmRouter };
