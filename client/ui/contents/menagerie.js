// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticleMixin, mmArticleLink } from './article.js';
// markdown text for Survival Guide
import { mdText } from './menagerie.md.js';

const article = 'menagerie';
const title = 'Menagerie';

var mmContentMenagerie =
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

MMDEBUG && console.log("mmContentMenagerie defined in menagerie.js:",
mmContentMenagerie);

export { mmContentMenagerie };
