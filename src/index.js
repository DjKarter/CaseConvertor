let uBut = document.getElementById('upper-case');
let lBut = document.getElementById('lower-case');
let pBut = document.getElementById('proper-case');
let sBut = document.getElementById('sentence-case');
let dBut = document.getElementById('save-text-file');
let text = document.getElementById('text');

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

uBut.addEventListener('click', () => {text.value = text.value.toUpperCase()});
lBut.addEventListener('click', () => {text.value = text.value.toLowerCase()});
pBut.addEventListener('click', () => {text.value = text.value.toLowerCase().split(' ').map((elem)=>elem[0].toUpperCase()+elem.slice(1)).join(' ')});
sBut.addEventListener('click', () => {text.value = text.value.toLowerCase().split('. ').map((elem)=>elem[0].toUpperCase()+elem.slice(1)).join('. ')});
dBut.addEventListener('click', () => {download('text.txt', text.value)});



