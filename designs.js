/*
Variables
*/

let colorcells = document.getElementById('colorPicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const table = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');

/*
Call makeGrid; to invoke the canvas to be built.
*/

size.addEventListener('submit', function(event) {
  pixelCanvas.innerHTML = '';
  event.preventDefault();
  makeGrid(height, width);
});

/*
function makeGrid; how the canvas was built and how color is put
*/

function makeGrid(height, width) {
  for (let h = 0; h < height.value; h++) {
    const rows = table.insertRow(0);
    for (let w = 0; w < width.value; w++) {
      const cells = rows.insertCell(0);
      cells.addEventListener('click', function(event) {
        cells.style.backgroundColor = colorcells.value;
      });
    }
  }
}
