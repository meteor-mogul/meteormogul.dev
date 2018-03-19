// Define content home vue component.
import { MMDEBUG } from '../../imports.js';

var mmContentHeading =
{
  name:
  'mm-content-heading',

  template:
  '#mm-content-heading-template',

  props:
  [
    'contentTitle'
  ]

};

MMDEBUG && console.log("mmContentHeading defined in heading.js:",
mmContentHeading);

export { mmContentHeading };
