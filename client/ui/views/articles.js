import { apiArticles } from './imports.js';
import { mmArticleMaker } from './article.js';

// Create array of article components
var mmArticles = [];

apiArticles.getList().forEach(function(name) {
  mmArticles.push(
    new mmArticleMaker(name, apiArticles[name].title, apiArticles[name].markdown)
  );
});

export { mmArticles };
