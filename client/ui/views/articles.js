import { mmArticles } from './imports.js';
import { mmArticle } from './article.js';

function makeArticle(name,title) {
  return new mmArticle(name, title, mmArticles.getMarkdown(name));
}

const mmArticleBazaar = makeArticle('bazaar', 'Bazaar');
const mmArticleBestiary = makeArticle('bestiary', 'Bestiary');
const mmArticleFormulary = makeArticle('formulary', 'Formulary');
const mmArticleForum = makeArticle('forum', 'Forum');
const mmArticleMenagerie = makeArticle('menagerie', 'Menagerie');
const mmArticleObservatory = makeArticle('observatory', 'Observatory');
const mmArticleOrientation = makeArticle('orientation', 'Orientation');
const mmArticleSurvivalGuide = makeArticle('survivalguide', 'Survival Guide');
const mmArticleToolKit = makeArticle('toolkit', 'Toolkit');

export {
  mmArticleBazaar, mmArticleBestiary, mmArticleFormulary,
  mmArticleForum, mmArticleMenagerie, mmArticleObservatory,
  mmArticleOrientation, mmArticleSurvivalGuide, mmArticleToolKit
};
