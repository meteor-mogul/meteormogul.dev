// Declare routes.
import { MMDEBUG } from './imports.js';
import { mmContentHome } from './ui/contents/home.js';
import { mmContentOrientation } from './ui/contents/orientation.js';

MMDEBUG && console.log("mmContentHome:", mmContentHome);

// Templates must have one enclosing tag.
//const HomePage = { template: '<span><v-icon>mood</v-icon> Home Page</span>'};
// const Orientation = { template: '<span><v-icon>mood</v-icon> Orientation</span>'};
const SurvivalGuide = { template: '<span><v-icon>mood_bad</v-icon> Survival Guide</span>'};
const Toolkit = { template: '<span><v-icon>mood_bad</v-icon> Toolkit</span>'};

// Declare Happy and Sad routes...
const routes =
[
  { path: '/', component: mmContentHome },
  { path: '/orientation', component: mmContentOrientation },
  { path: '/survivalguide', component: SurvivalGuide },
  { path: '/toolkit', component: Toolkit }
];

// ... then add them to the router ...
const mmRouter =
new VueRouter({
  routes // short for `routes: routes`
});

export { mmRouter };
