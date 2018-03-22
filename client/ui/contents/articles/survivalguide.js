// Define content Survival Guide vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Survival Guide
import { mdText } from '../../../data/articles/survivalguide.md.js';

const mmArticleSurvivalGuide = new mmArticle('survivalguide', 'Survival Guide', mdText);

MMDEBUG && console.log("mmArticleSurvivalGuide defined in survivalguide.js:",
mmArticleSurvivalGuide);

export { mmArticleSurvivalGuide };
