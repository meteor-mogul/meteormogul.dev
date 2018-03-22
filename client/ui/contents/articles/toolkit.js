// Define content home vue component.
import { MMDEBUG } from '../../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Survival Guide
import { mdText } from '../../../data/articles/toolkit.md.js';

const mmArticleToolKit = new mmArticle('toolkit', 'Toolkit', mdText);

MMDEBUG && console.log("mmArticleToolKit defined in toolkit.js:",
mmArticleToolKit);

export { mmArticleToolKit };
