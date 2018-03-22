// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin, markedMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';
import { mmListArticles } from '../../data/lists/articles.js';
import { mmLister } from '../../api/lister.js';

//MMDEBUG = true;

const mmListerArticles = new mmLister(mmListArticles);

const mmArticleLink =
function(article, direction) {
  MMDEBUG && console.log('mmArticleLink()', article, direction);
  var which = null;
  if (direction == 'prev') {
    which = mmListerArticles.before(article);
  }
  if (direction == 'next') {
    which = mmListerArticles.after(article);
  }
  if (which) {
    return '/' + which + '.html';
  } else {
    return which;
  }
};

// Constructor for articles.
// A vue component that uses the mm-content-article-template
function mmArticle(article, title, mdText) {
    this.name =
    'mm-content-' + article;

    this.template =
    '#mm-content-article-template';

    this.components =
    {
      'mm-quickstart': mmQuickStart,
      'mm-content-heading': mmContentHeading
    };

    this.data =
    function () {
      return {
        title,
        mdText,
        prevLink: mmArticleLink(article,'prev'),
        nextLink: mmArticleLink(article,'next')
      };
    };

    this.mixins =
    [
      drawerMixin,
      samecaseMixin,
      markedMixin
    ];
}

MMDEBUG && console.log("mmArticle defined in article.js:",
mmArticle);

export { mmArticle };
