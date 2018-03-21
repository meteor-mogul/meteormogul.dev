// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticleMixin, mmArticleLink } from './article.js';
// markdown text for Survival Guide
import { mdText } from './bazaar.md.js';

const article = 'bazaar';
const title = 'Bazaar';

var mmContentBazaar =
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

MMDEBUG && console.log("mmContentBazaar defined in bazaar.js:",
mmContentBazaar);

export { mmContentBazaar };
