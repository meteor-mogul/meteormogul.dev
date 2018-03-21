// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticleMixin, mmArticleLink } from './article.js';
// markdown text for orientation
import { mdText } from './orientation.md.js';

//MMDEBUG = true;
const article = 'orientation';
const title = 'Orientation';

var mmContentOrientation =
{
  name:
  'mm-content-' + article,

  data:
  function () {
    return {
      title,
      mdText,
      prevLink: mmArticleLink(article,'prev'),
      nextLink: mmArticleLink(article,'next')
    };
  },

  mixins:
  [
    mmArticleMixin
  ]

};

MMDEBUG && console.log("mmContentOrientation defined in orientation.js:",
mmContentOrientation);

export { mmContentOrientation };
