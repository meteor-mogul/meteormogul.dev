// Define content Observatory vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticleMixin, mmArticleLink } from './article.js';
// markdown text for Survival Guide
import { mdText } from './observatory.md.js';

const article = 'observatory';
const title = 'Observatory';

var mmContentObservatory =
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

MMDEBUG && console.log("mmContentObservatory defined in observatory.js:",
mmContentObservatory);

export { mmContentObservatory };
