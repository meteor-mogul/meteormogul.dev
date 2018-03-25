// List of documentation
// title: Name of document
// href: Route to document
var mmObjDocs =
{
  orientation:
  {
    title: 'Orientation',
    tooltip: "Getting Started",
    href: '/orientation.html',
    target: 'router'
  },

  survivalguide:
  {
    title: 'Survival Guide',
    tooltip: "Concepts and Strategies",
    href: '/survivalguide.html',
    target: 'router'
  },

  toolkit:
  {
    title: 'Toolkit',
    tooltip: "Development Environment",
    href: '/toolkit.html',
    target: 'router'
  },

  formulary:
  {
    title: 'Formulary',
    tooltip: "How To Do Stuff",
    href: '/formulary.html',
    target: 'router'
  },

  bestiary:
  {
    title: 'Bestiary',
    tooltip: "Bugs and Where to Find Them",
    href: '/bestiary.html',
    target: 'router'
  },

  bazaar:
  {
    title: 'Bazaar',
    tooltip: "Shameless Commerce Division",
    href: '/bazaar.html',
    target: 'router'
  },

  forum:
  {
    title: 'Forum',
    tooltip: "Where to Ask Questions and Share Answers",
    href: '/forum.html',
    target: 'router'
  },

  observatory:
  {
    title: 'Observatory',
    tooltip: "Related Projects and Resources",
    href: '/observatory.html',
    target: 'router'
  }
};

var mmListDocs =
[
  mmObjDocs['orientation'],
  mmObjDocs['survivalguide'],
  mmObjDocs['toolkit'],
  mmObjDocs['formulary'],
  mmObjDocs['bestiary'],
  mmObjDocs['bazaar'],
  mmObjDocs['forum'],
  mmObjDocs['observatory']
];

export { mmObjDocs, mmListDocs };
