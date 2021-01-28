import SkySelect from './lib/js/sky-select.js';

const selectElements = document.querySelectorAll('[sky-select]');

selectElements.forEach(selectElement => {
    new SkySelect(selectElement);
})

function onChange(e){
    console.log(e);
}
