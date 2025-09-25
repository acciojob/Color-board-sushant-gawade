//your JS code here. If required.
const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.transition = 'background-color 0s'; // instant color on hover
}

function removeColor(element) {
  element.style.transition = 'background-color 1s ease'; // fade back
  element.style.backgroundColor = '#222';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
