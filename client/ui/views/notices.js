import { apiNotices } from './imports.js';
import { mmNoticeMaker } from './notice.js';

// Create array of notice components
var mmNotices = [];

apiNotices.getList().forEach(function(name) {
  mmNotices.push(
    new mmNoticeMaker(name, apiNotices[name].title, apiNotices[name].markdown)
  );
});

export { mmNotices };
