// explore the dataset
console.log(stateData.ny); // ny data
 /* { name: 'New York', abbr: 'NY', capitol: 'Albany', pop: '19,651,127', statehood: '1788',	mammal:     'Beaver', bird: 'Bluebird', tree: 'Sugar Maple', flower: 'Rose', nickname: 'Empire State'
  }*/

console.log(stateData.ny.tree); // Sugar Maple

// get the select menu
let selectMenu = document.getElementById('state-list');
console.log(selectMenu.value); // ny

// get the current selected state from the dataset
// object[dynamicPropertyValue]
// stateData.selectMenu.value doesn't work bc selectMenu cannot be found in stateData
// adding [] will look for what it is resolving for
console.log(stateData[selectMenu.value]);

let selectedState = stateData[selectMenu.value];

// get individual pieces of data from selected state
// get bird, mammal, flower, tree
console.log(selectedState.bird);
console.log(selectedState.mammal);
console.log(selectedState.flower);
console.log(selectedState.tree);

// the select menu has an options array
console.log(selectMenu.options.length); // 53






// get the DOM elements (tags on page) that hold the state data
let infoMammalP = document.getElementById('info-mammal');
let infoBirdP = document.getElementById('info-bird');
let infoFlowerP = document.getElementById('info-flower');
let infoTreeP = document.getElementById('info-tree');
let infoAbbrP = document.getElementById('info-abbr');
let infoCapitolP = document.getElementById('info-capitol');
let infoPopulationP = document.getElementById('info-population');
let infoStatehoodP = document.getElementById('info-statehood');
let infoNicknameP = document.getElementById('info-nickname');
let infoPic = document.getElementById('info-pic'); // swap image
let infoNameFigCap = document.getElementById('info-name'); // swap image caption

// instruct the select menu to listen for a change to itself and call the function when menu is changed
selectMenu.addEventListener('change', displayStateInfo);

function displayStateInfo() {
    // inside a function, "this" is the thing that's calling the function
    console.log(this.value) // the selected state abbr
    let selectedState = stateData[this.value]; // look up selected state

    infoMammalP.textContent = selectedState.mammal;
    infoBirdP.textContent = selectedState.bird;
    infoFlowerP.textContent = selectedState.flower;
    infoTreeP.textContent = selectedState.tree;
    infoAbbrP.textContent = selectedState.abbr;
    infoCapitolP.textContent = selectedState.capitol;
    infoPopulationP.textContent = selectedState.pop;
    infoStatehoodP.textContent = selectedState.statehood;
    infoNicknameP.textContent = selectedState.nickname;

    infoPic.src = './img/' + selectedState.abbr + '.jpg'; // swap image
    infoNameFigCap.textContent = selectedState.name;
}