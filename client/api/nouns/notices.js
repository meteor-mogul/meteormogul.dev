import { mdCredits } from '../../data/notices/credits.md.js';
import { mdDonations } from '../../data/notices/donations.md.js';
import { mdHelp } from '../../data/notices/help.md.js';

// Ordered list of notices
const mmListNotices =
[
  'credits',
  'donations',
  'help'
];

// Notices API object
const apiNotices =
{
  credits:
  {
    name:  'credits',
    title: 'Credits and Kudos',
    markdown: mdCredits
  },
  donations:
  {
    name:  'donations',
    title: 'Donations',
    markdown: mdDonations
  },
  help:
  {
    name:  'help',
    title: 'Help Wanted',
    markdown: mdHelp
  },
  getList:
  function () {
    return mmListNotices;
  }
};

export { apiNotices };
