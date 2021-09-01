import visualizeBubbleSort from "./visualizer_algorithms/bubbleSortVisualizer.js";

const elements = document.getElementsByClassName("element");

let initializeRandomArray = function(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 100) + 1;
        elements[i].style.height = `${array[i]}%`;
    }
    return array;
}

let arrayToSort = initializeRandomArray(50);

visualizeBubbleSort(arrayToSort, elements);