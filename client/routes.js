// Declare templates for routes.
// Templates must have one enclosing tag.
const Nonplussed = { template: '<span></span>'};
const Happy = { template: '<v-icon>mood</v-icon>'};
const Sad = { template: '<v-icon>mood_bad</v-icon>'};

// Declare Happy and Sad routes...
const routes = [
  { path: '/', component: Nonplussed },
  { path: '/happy', component: Happy },
  { path: '/sad', component: Sad }
];

// ... then add them to the router ...
const mmRouter = new VueRouter({
  routes // short for `routes: routes`
});

export { mmRouter };
