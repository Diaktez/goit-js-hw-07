const inputHole = document.querySelector('#name-input');
const spanHole = document.querySelector('#name-output');

inputHole.addEventListener('input', hole => {
  const inHole = hole.target.value.trim();

  if (inHole === '' || inHole.length < 2 || /\d/.test(inHole)) {
    spanHole.textContent = 'Anonymous';
  } else {
    spanHole.textContent = `you name: ${inHole[0].toUpperCase()}${inHole
      .slice(1)
      .toLowerCase()}`;
  }
});
