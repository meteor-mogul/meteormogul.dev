import { articlesList, articlesData } from '../../data/articles.js';

// This object includes all the data plus a .getList() method
// which returns an ordered list of articles.
var apiArticles = articlesData;
apiArticles.getList =
function () {
  return articlesList;
};

export { apiArticles };
