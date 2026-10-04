import { Fields } from './components/Fields.js';
import { Popup } from './components/Popup.js';
import { ProjectList } from './components/ProjectList.js';

new Fields();
new ProjectList('Initial');
new ProjectList('Active');
new ProjectList('Finished');

new Popup();
