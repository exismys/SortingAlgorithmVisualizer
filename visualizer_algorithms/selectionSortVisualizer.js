import {yellowish, greenish, radish, greyish, lightGreyish, timer} from "./globalConstants.js"

let selectionSort = async function(array, elements, speed) {
    for (let i = 0; i < array.length - 1; i++) {
        elements[i].style.backgroundColor = greyish;
        let minValueIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            elements[j].style.backgroundColor = greyish;
            await timer(speed);
            if (array[j] < array[minValueIndex]) {
                elements[j].style.backgroundColor = radish;
                minValueIndex = j;
                await timer(speed);
            }
            elements[j].style.backgroundColor = lightGreyish;
        }

        let temp = array[i];
        array[i] = array[minValueIndex];
        array[minValueIndex] = temp;
        elements[minValueIndex].style.backgroundColor = yellowish;
        const textNode = document.createTextNode("M");
        elements[minValueIndex].appendChild(textNode);
        await timer(speed * 10);
        elements[i].style.height = `${array[i]}%`;
        elements[i].style.backgroundColor = lightGreyish;
        elements[minValueIndex].style.backgroundColor = lightGreyish;
        elements[minValueIndex].removeChild(textNode);
        elements[minValueIndex].style.height = `${temp}%`;
        elements[i].style.backgroundColor = greenish;
    }
    elements[array.length - 1].style.backgroundColor = greenish;
}

export default selectionSort;