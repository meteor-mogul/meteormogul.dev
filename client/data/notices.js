import { mdCredits } from './notices/credits.md.js';
import { mdDonations } from './notices/donations.md.js';
import { mdHelp } from './notices/help.md.js';

// Ordered list of notices
const noticesList =
[
  'credits',
  'donations',
  'help'
];

// Notices data object
const noticesData =
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
  }
};

export { noticesList, noticesData };
