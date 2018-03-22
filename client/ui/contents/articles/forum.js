// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Survival Guide
import { mdText } from '../../../data/articles/forum.md.js';

const mmArticleForum = new mmArticle('forum', 'Forum', mdText);

MMDEBUG && console.log("mmArticleForum defined in forum.js:",
mmArticleForum);

export { mmArticleForum };
