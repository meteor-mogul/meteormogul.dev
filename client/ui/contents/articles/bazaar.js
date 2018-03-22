// Define content home vue component.
import { MMDEBUG } from '../../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Survival Guide
import { mdText } from '../../../data/articles/bazaar.md.js';

const mmArticleBazaar = new mmArticle('bazaar', 'Bazaar', mdText);

MMDEBUG && console.log("mmArticleBazaar defined in bazaar.js:",
mmArticleBazaar);

export { mmArticleBazaar };
