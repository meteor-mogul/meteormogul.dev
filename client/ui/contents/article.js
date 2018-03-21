// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin, markedMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';
import { mmListArticles } from '../../api/lists/articles.js';

//MMDEBUG = true;

var mmArticleLink =
function(article, direction) {
  MMDEBUG && console.log('mmArticleLink()', article, direction);
  var position = mmListArticles.indexOf(article);
  MMDEBUG && console.log('position', position);
  if (direction == 'prev') {
    if (position == 0) {
      return false;
    }
    position = position - 1;
  }
  if (direction == 'next') {
    if (position >= mmListArticles.length - 1) {
      return false;
    }
    position = position + 1;
  }
  return '/' + mmListArticles[position] + '.html';
};

//MMDEBUG = true;

var mmArticleMixin =
{
  template:
  '#mm-content-article-template',

  components:
  {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  },

  mixins:
  [
    drawerMixin,
    samecaseMixin,
    markedMixin
  ]

};

MMDEBUG && console.log("mmArticleMixin defined in article.js:",
mmArticleMixin);

export { mmArticleMixin, mmArticleLink };
