import {greenish, radish, greyish, lightGreyish, timer} from "./globalConstants.js"

let insertionSort = async function(array, elements, speed) {
    for (let i = 1; i < array.length; i++) {
        
        let currentKey = array[i];
        const textNode = document.createTextNode("C");
        elements[i].appendChild(textNode);
        let rightPosition = i;
        let sortedArrayIterator = i - 1;
        await timer(speed);
        elements[sortedArrayIterator].style.backgroundColor = greyish;
        while (sortedArrayIterator >= 0 && currentKey < array[sortedArrayIterator]) {
            elements[sortedArrayIterator].style.backgroundColor = greyish;
            await timer(speed);
            elements[sortedArrayIterator].style.backgroundColor = radish;
            await timer(speed);
            elements[sortedArrayIterator].style.backgroundColor = greenish;
            array[rightPosition] = array[sortedArrayIterator];
            elements[rightPosition].style.height = `${array[sortedArrayIterator]}%`;

            rightPosition--;
            sortedArrayIterator--;
        }
        array[rightPosition] = currentKey;
        timer(speed);
        elements[rightPosition].style.height = `${currentKey}%`;
        elements[i].removeChild(textNode);
        for (let k = 0; k <= i; k++) {
            elements[k].style.backgroundColor = greenish;
        }
    }
}

export default insertionSort;