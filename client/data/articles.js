import { mdBazaar } from './articles/bazaar.md.js';
import { mdBestiary } from './articles/bestiary.md.js';
import { mdFormulary } from './articles/formulary.md.js';
import { mdForum } from './articles/forum.md.js';
import { mdInsertion } from './articles/insertion.md.js';
import { mdMenagerie } from './articles/menagerie.md.js';
import { mdObservatory } from './articles/observatory.md.js';
import { mdOrientation } from './articles/orientation.md.js';
import { mdSurvivalGuide } from './articles/survivalguide.md.js';
import { mdToolkit } from './articles/toolkit.md.js';

// Articles data object
//  name:
//  title:
//  markdown:
const articlesData =
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
  insertion:
  {
    name: 'insertion',
    title: 'Testing Insertion',
    markdown: mdInsertion
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
  }
};

// Ordered list of articles
const articlesList =
[
  'orientation',
  'survivalguide',
  'toolkit',
  'formulary',
  'bestiary',
  'menagerie',
  'bazaar',
  'insertion',
  'forum',
  'observatory'
];

export { articlesList, articlesData };
