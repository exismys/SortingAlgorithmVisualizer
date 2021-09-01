const elements = document.getElementsByClassName("element");
const greenish = "#3EE64A"
const radish = "#DC8529"
const greyish = "#5F7589"
const lightGreyish = "#849192"

let initializeRandomArray = function(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * 100) + 1;
        elements[i].style.height = `${array[i]}%`;
    }
    return array;
}

let arrayToSort = initializeRandomArray(50);

// Subrouting to swap indeces
async function compareAndSwap(array, index1, index2) {
    if (array[index1] > array[index2]) {
        // If indeces are not in order and need to be swaped, background-color: something radish
        elements[index1].style.backgroundColor = radish;
        elements[index2].style.backgroundColor = radish;
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        elements[index1].style.height = `${array[index1]}%`;
        elements[index2].style.height = `${array[index2]}%`;

        // Restoring to default color after the swap
        await timer(100);
        elements[index1].style.backgroundColor = lightGreyish;
        elements[index2].style.backgroundColor = lightGreyish;

    } else {
        // If they are already in order and no action needed, background-color: something greenish
        elements[index1].style.backgroundColor = greenish;
        elements[index2].style.backgroundColor = greenish;
        await timer(100);
        //Restoring to default colors
        elements[index1].style.backgroundColor = lightGreyish;
        elements[index2].style.backgroundColor = lightGreyish;
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms));

let visualizeBubbleSort = async function(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // Current array indeces to be compared
            elements[j].style.backgroundColor = greyish;
            elements[j + 1].style.backgroundColor = greyish;

            await timer(100);
            await compareAndSwap(array, j, j + 1);
        }
    }
}

visualizeBubbleSort(arrayToSort);