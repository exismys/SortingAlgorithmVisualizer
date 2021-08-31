let elements = document.getElementsByClassName("element");
let elementNo = 0;

let visualize = function() {
    let randomHeight = Math.floor(Math.random() * 101);
    console.log(randomHeight);
    elements[elementNo++].style.height = `${randomHeight}%`;
    if (elementNo == elements.length) {
        clearInterval(interval);
    }
}

let interval = setInterval(visualize, 200);