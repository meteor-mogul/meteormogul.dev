// Define notice vue component.
import {
  MMDEBUG,
  drawerMixin, samecaseMixin, markedMixin,
  mmQuickStart,
  mmContentHeading,
  apiNotices
} from './imports.js';

//MMDEBUG = true;
// Constructor for notices.
// A vue component that uses the mm-content-notice-template
function mmNoticeMaker(notice, title, mdText) {
    this.name =
    'mm-content-' + notice;

    this.template =
    '#mm-content-notice-template';

    this.path = '/' + notice + '.html';

    this.components =
    {
      'mm-quickstart': mmQuickStart,
      'mm-content-heading': mmContentHeading
    };

    this.data =
    function () {
      return {
        title,
        mdText
      };
    };

    this.mixins =
    [
      drawerMixin,
      samecaseMixin,
      markedMixin
    ];
}

MMDEBUG && console.log("mmNoticeMaker defined in notice.js:",
mmNoticeMaker);

export { mmNoticeMaker };
