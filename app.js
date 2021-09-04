import visualizeBubbleSort from "./visualizer_algorithms/bubbleSortVisualizer.js";
import visualizeMergeSort from "./visualizer_algorithms/mergeSortVisualizer.js";
import visualizeInsertionSort from "./visualizer_algorithms/insertionSortVisualizer.js"

let initializeRandomArray = function(elements, length) {
    let arrayToSort = [];
    for (let i = 0; i < length; i++) {
        arrayToSort[i] = Math.floor(Math.random() * 100) + 1;
        elements[i].style.height = `${arrayToSort[i]}%`;
    }
    return arrayToSort;
}

const logger = function(message) {
    const logContainer = document.getElementById("logs");
    logContainer.appendChild(document.createElement("p").appendChild(document.createTextNode(message)));
    logContainer.appendChild(document.createElement("br"));

}

const initializeRandomArrayAndLog = function(elements) {
    logger("Initializing random array...")
    let array = initializeRandomArray(elements, 50);
    logger("Done.");
    logger(`Array: ${array}`)
    return array;
}

async function bsv(){
    const elements = document.getElementsByClassName("element");
    const arrayToSort = initializeRandomArrayAndLog(elements);
    logger("Sorting...")
    await visualizeBubbleSort(arrayToSort, elements);
    logger("Done.")
}

async function isv() {
    const elements = document.getElementsByClassName("element");
    const arrayToSort = initializeRandomArrayAndLog(elements);
    logger("Sorting...")
    await visualizeInsertionSort(arrayToSort, elements)
    logger("Done.")
}

async function msv() {
    const elements = document.getElementsByClassName("element");
    const arrayToSort = initializeRandomArrayAndLog(elements);
    logger("Sorting...")
    await visualizeMergeSort(arrayToSort, elements, 100, 0, arrayToSort.length - 1);
    logger("Done.")
}

window.bsv = bsv;
window.isv = isv;
window.msv = msv;