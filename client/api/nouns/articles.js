import { mdBazaar } from '../../data/articles/bazaar.md.js';
import { mdBestiary } from '../../data/articles/bestiary.md.js';
import { mdFormulary } from '../../data/articles/formulary.md.js';
import { mdForum } from '../../data/articles/forum.md.js';
import { mdMenagerie } from '../../data/articles/menagerie.md.js';
import { mdObservatory } from '../../data/articles/observatory.md.js';
import { mdOrientation } from '../../data/articles/orientation.md.js';
import { mdSurvivalGuide } from '../../data/articles/survivalguide.md.js';
import { mdToolkit } from '../../data/articles/toolkit.md.js';

// Ordered list of articles
const mmListArticles =
[
  'orientation',
  'survivalguide',
  'toolkit',
  'formulary',
  'bestiary',
  'menagerie',
  'bazaar',
  'forum',
  'observatory'
];

// Articles API object
//  name:
//  title:
//  markdown:
const apiArticles =
{
  orientation:
  {
    name: 'orientation',
    title: 'Orientation',
    markdown: mdOrientation
  },
  survivalguide:
  {
    name: 'survivalguide',
    title: 'Survival Guide',
    markdown: mdSurvivalGuide
  },
  toolkit:
  {
    name: 'toolkit',
    title: 'Toolkit',
    markdown: mdToolkit
  },
  formulary:
  {
    name: 'formulary',
    title: 'Formulary',
    markdown: mdFormulary
  },
  bestiary:
  {
    name: 'bestiary',
    title: 'Bestiary',
    markdown: mdBestiary
  },
  menagerie:
  {
    name: 'menagerie',
    title: 'Menagerie',
    markdown: mdMenagerie
  },
  bazaar:
  {
    name: 'bazaar',
    title: 'Bazaar',
    markdown: mdBazaar
  },
  forum:
  {
    name: 'forum',
    title: 'Forum',
    markdown: mdForum
  },
  observatory:
  {
    name: 'observatory',
    title: 'Observatory',
    markdown: mdObservatory
  },
  getList:
  function () {
    return mmListArticles;
  }
};

export { apiArticles };
