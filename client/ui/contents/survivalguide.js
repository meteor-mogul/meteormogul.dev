// Define content Survival Guide vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticleMixin, mmArticleLink } from './article.js';
// markdown text for Survival Guide
import { mdText } from './survivalguide.md.js';

const article = 'survivalguide';
const title = 'Survival Guide';

var mmContentSurvivalGuide =
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

MMDEBUG && console.log("mmContentSurvivalGuide defined in survivalguide.js:",
mmContentSurvivalGuide);

export { mmContentSurvivalGuide };
