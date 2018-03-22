// Define content home vue component.
import { MMDEBUG } from '../../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for orientation
import { mdText } from '../../../data/articles/orientation.md.js';

//MMDEBUG = true;
const mmArticleOrientation = new mmArticle('orientation', 'Orientation', mdText);

MMDEBUG && console.log("mmArticleOrientation defined in orientation.js:",
mmArticleOrientation);

export { mmArticleOrientation };
