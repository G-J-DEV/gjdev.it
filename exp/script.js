function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var display = document.getElementById('display').value;
  var result = eval(display);
  document.getElementById('display').value = result;
}
