// Define content Observatory vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Survival Guide
import { mdText } from '../../../data/articles/observatory.md.js';

const mmArticleObservatory = new mmArticle('observatory', 'Observatory', mdText);

MMDEBUG && console.log("mmArticleObservatory defined in observatory.js:",
mmArticleObservatory);

export { mmArticleObservatory };
