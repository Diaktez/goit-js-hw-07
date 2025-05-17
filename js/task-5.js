function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const holeButton = document.querySelector('.change-color');
const holeSpan = document.querySelector('.color');

holeButton.addEventListener('click', () => {
  const holeColor = getRandomHexColor();
  document.body.style.backgroundColor = holeColor;
  holeSpan.textContent = holeColor;
});
