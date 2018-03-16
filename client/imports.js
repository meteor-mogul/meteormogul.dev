// Import Vue-related symbols from packages.
import { Vue } from 'meteor/meteormogul:vue-dist';
import { Vuetify } from 'meteor/meteormogul:vuetify-dist';
import { VueRouter } from 'meteor/meteormogul:vue-router-dist';
import VueMeteorTracker from 'vue-meteor-tracker';

// Use Vue with packages
// Use VueMeteorTracker to give Vue access to Meteor reactivity
Vue.use(VueMeteorTracker);
// Use Vuetify for style and UI widgets.
Vue.use(Vuetify);
// Use Vue Router for routes.
// We're using client-side routes, which just changes state of app in browser.
// With client-side routes, server does not get involved.
// Server just delivers a Single Page App, then browser runs JavaScript to
// provide app functionality.
Vue.use(VueRouter);

// Export this Vue
export { Vue };
