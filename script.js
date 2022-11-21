import { MICDropdown } from './micDropDown.js';

let units = [];

for (let i = 1; i < 100; i++) {
    units.push(`unit ${i}`);
}

const dropDown = new MICDropdown(document.querySelector('.dropdown-list'), {
    departments: units,
});
