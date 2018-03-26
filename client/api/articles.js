import { mdBazaar } from '../data/articles/bazaar.md.js';
import { mdBestiary } from '../data/articles/bestiary.md.js';
import { mdFormulary } from '../data/articles/formulary.md.js';
import { mdForum } from '../data/articles/forum.md.js';
import { mdMenagerie } from '../data/articles/menagerie.md.js';
import { mdObservatory } from '../data/articles/observatory.md.js';
import { mdOrientation } from '../data/articles/orientation.md.js';
import { mdSurvivalGuide } from '../data/articles/survivalguide.md.js';
import { mdToolkit } from '../data/articles/toolkit.md.js';

const mdArticles =
{
  bazaar: mdBazaar,
  bestiary: mdBestiary,
  formulary: mdFormulary,
  forum: mdForum,
  menagerie: mdMenagerie,
  observatory: mdObservatory,
  orientation: mdOrientation,
  survivalguide: mdSurvivalGuide,
  toolkit: mdToolkit
};

// List of articles
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

const mmObjArticles =
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
    markdown: mdSurvivalGuide
  },
  toolkit:
  {
    name: 'toolkit',
    markdown: mdToolkit
  },
  formulary:
  {
    name: 'formulary',
    markdown: mdFormulary
  },
  bestiary:
  {
    name: 'bestiary',
    markdown: mdBestiary
  },
  menagerie:
  {
    name: 'menagerie',
    markdown: mdMenagerie
  },
  bazaar:
  {
    name: 'bazaar',
    markdown: mdBazaar
  },
  forum:
  {
    name: 'forum',
    markdown: mdForum
  },
  observatory:
  {
    name: 'observatory',
    markdown: mdObservatory
  }
};

const mmArticles =
{
  getList:
  function () {
    return mmListArticles;
  },
  getMarkdown:
  function (article) {
    return mdArticles[article];
  }
};

export { mmListArticles, mmObjArticles, mmArticles };
