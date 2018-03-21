// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticleMixin, mmArticleLink } from './article.js';
// markdown text for Formulary
import { mdText } from './formulary.md.js';

const article = 'formulary';
const title = 'Formulary';

var mmContentFormulary =
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

MMDEBUG && console.log("mmContentFormulary defined in formulary.js:",
mmContentFormulary);

export { mmContentFormulary };
