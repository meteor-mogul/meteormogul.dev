// Define content home vue component.
import { MMDEBUG } from '../../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Survival Guide
import { mdText } from '../../../data/articles/menagerie.md.js';

const mmArticleMenagerie = new mmArticle('menagerie', 'Menagerie', mdText);

MMDEBUG && console.log("mmArticleMenagerie defined in menagerie.js:",
mmArticleMenagerie);

export { mmArticleMenagerie };
