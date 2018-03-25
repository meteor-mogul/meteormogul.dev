// Define bestiary component.
import { MMDEBUG, mmArticle } from './imports.js';
// markdown text for Bestiary
import { mdText } from '../../../data/articles/bestiary.md.js';

const mmArticleBestiary = new mmArticle('bestiary', 'Bestiary', mdText);

MMDEBUG && console.log("mmArticleBestiary defined in bestiary.js:",
mmArticleBestiary);

export { mmArticleBestiary };
