import { mmListDemos } from '../../data/lists/demos.js';
import { mmObjDocs, mmListDocs } from '../../data/lists/docs.js';
import { mmListRepos } from '../../data/lists/repos.js';

var apiDocs = mmObjDocs;
apiDocs.getList =
function () {
  return mmListDocs;
};

export { mmListDemos, apiDocs, mmListRepos };
