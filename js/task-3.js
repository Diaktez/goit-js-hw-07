const inputHole = document.querySelector('#name-input');
const spanHole = document.querySelector('#name-output');

inputHole.addEventListener('input', hole => {
  const inHole = hole.target.value.trim();

  if (inHole === '') {
    spanHole.textContent = 'Anonymous';
  } else {
    spanHole.textContent = inHole;
  }
});
