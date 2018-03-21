// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticleMixin, mmArticleLink } from './article.js';
// markdown text for Survival Guide
import { mdText } from './toolkit.md.js';

const article = 'toolkit';
const title = 'Toolkit';

var mmContentToolKit =
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

MMDEBUG && console.log("mmContentToolKit defined in toolkit.js:",
mmContentToolKit);

export { mmContentToolKit };
