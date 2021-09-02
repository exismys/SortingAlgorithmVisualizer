// import visualizeBubbleSort from "./visualizer_algorithms/bubbleSortVisualizer.js";
import visualizeMergeSort from "./visualizer_algorithms/mergeSortVisualizer.js";

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

//visualizeBubbleSort(arrayToSort, elements);
visualizeMergeSort(arrayToSort, elements, 0, arrayToSort.length - 1);