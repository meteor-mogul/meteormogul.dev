// Define content home vue component.
import { MMDEBUG } from '../../../imports.js';
import { mmArticle } from '../article.js';
// markdown text for Formulary
import { mdText } from '../../../data/articles/formulary.md.js';

const mmArticleFormulary = new mmArticle('formulary', 'Formulary', mdText);

MMDEBUG && console.log("mmArticleFormulary defined in formulary.js:",
mmArticleFormulary);

export { mmArticleFormulary };
