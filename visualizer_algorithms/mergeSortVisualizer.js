import {greenish, radish, greyish, lightGreyish, timer} from "./globalConstants.js"

let merge =  async function(array, elements, start, mid, end) {
    let leftArray = [], rightArray = [];
    for (let i = start, j = 0; i <= mid; i++) leftArray[j++] = array[i];
    for (let i = mid + 1, j = 0; i <= end; i++) rightArray[j++] = array[i];
    let i = 0, j = 0, current = start;
    while (i < leftArray.length && j < rightArray.length) {
        await timer(2);
        elements[start + i].style.backgroundColor = greyish;
        elements[mid + 1 + j].style.backgroundColor = greyish;
        await timer(2);
        elements[start + i].style.backgroundColor = lightGreyish;
        elements[mid + 1 + j].style.backgroundColor = lightGreyish;
        if (leftArray[i] < rightArray[j]) {
            elements[current].style.height = `${leftArray[i]}%`;
            array[current++] = leftArray[i++];
        } else {
            elements[current].style.height = `${rightArray[j]}%`;
            array[current++] = rightArray[j++]; 
        }
    }
    while (i < leftArray.length) {
        elements[current].style.backgroundColor = greyish;
        await timer(2);
        elements[current].style.backgroundColor = lightGreyish;
        elements[current].style.height = `${leftArray[i]}%`;
        array[current++] = leftArray[i++];
    }
    while (j < rightArray.length) {
        elements[current].style.backgroundColor = greyish;
        await timer(2);
        elements[current].style.backgroundColor = lightGreyish;
        elements[current].style.height = `${rightArray[j]}%`;
        array[current++] = rightArray[j++];
    }
}

let mergeSort = async function(array, elements, start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        elements[mid].style.backgroundColor = radish;
        await timer(2);
        elements[mid].style.backgroundColor = lightGreyish;
        await mergeSort(array, elements, start, mid);
        await mergeSort(array, elements, mid + 1, end);
        await merge(array, elements, start, mid, end);
    }
}

export default mergeSort;