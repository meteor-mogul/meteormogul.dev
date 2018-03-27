import { MMDEBUG } from '../../debug.js';
// MMDEBUG = true;
MMDEBUG && console.log("api/nouns/lists.js");
import { demosList, demosData } from '../../data/lists.js';
import { docsList, docsData } from '../../data/lists.js';
import { reposList, reposData } from '../../data/lists.js';

MMDEBUG && console.log(demosList, demosData, docsList, docsData, reposList, reposData );

var apiDemos = demosData;
apiDemos.getList =
function () {
  return demosList;
};

var apiDocs = docsData;
apiDocs.getList =
function () {
  return docsList;
};

var apiRepos = reposData;
apiRepos.getList =
function () {
  return reposList;
};

// MMDEBUG = true;
MMDEBUG && console.log(apiDemos, apiDocs, apiRepos);

export { apiDemos, apiDocs, apiRepos };
