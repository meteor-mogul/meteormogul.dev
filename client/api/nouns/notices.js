import { noticesList, noticesData } from '../../data/notices.js';

// This object includes all the data plus a .getList() method
// which returns an ordered list of notices.
var apiNotices = noticesData;
apiNotices.getList =
function () {
  return noticesList;
};

export { apiNotices };
