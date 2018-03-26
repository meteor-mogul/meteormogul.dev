import { apiArticles } from './imports.js';
import { mmArticle } from './article.js';

function makeArticle(name) {
  return new mmArticle(name, apiArticles[name].title, apiArticles[name].markdown);
}

const mmArticleBazaar = makeArticle('bazaar');
const mmArticleBestiary = makeArticle('bestiary');
const mmArticleFormulary = makeArticle('formulary');
const mmArticleForum = makeArticle('forum');
const mmArticleMenagerie = makeArticle('menagerie');
const mmArticleObservatory = makeArticle('observatory');
const mmArticleOrientation = makeArticle('orientation');
const mmArticleSurvivalGuide = makeArticle('survivalguide');
const mmArticleToolKit = makeArticle('toolkit');

const mmArticles =
[
  mmArticleBazaar, mmArticleBestiary, mmArticleFormulary,
  mmArticleForum, mmArticleMenagerie, mmArticleObservatory,
  mmArticleOrientation, mmArticleSurvivalGuide, mmArticleToolKit
];

export {
  mmArticleBazaar, mmArticleBestiary, mmArticleFormulary,
  mmArticleForum, mmArticleMenagerie, mmArticleObservatory,
  mmArticleOrientation, mmArticleSurvivalGuide, mmArticleToolKit,
  mmArticles
};
