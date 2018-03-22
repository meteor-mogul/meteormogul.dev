// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Survival Guide
import { mdText } from '../../../data/articles/bestiary.md.js';

const mmArticleBestiary = new mmArticle('bestiary', 'Bestiary', mdText);

MMDEBUG && console.log("mmArticleBestiary defined in bestiary.js:",
mmArticleBestiary);

export { mmArticleBestiary };
