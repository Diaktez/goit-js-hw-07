const formHole = document.querySelector('.login-form');
formHole.addEventListener('submit', hole => {
  hole.preventDefault();

  const holeEmail = hole.target.email.value.trim();
  const holePassword = hole.target.password.value.trim();

  if (holeEmail === '' || holePassword === '') {
    alert('All form fields must be filled in');
    return;
  }
  const holeToConsole = {
    email: holeEmail,
    password: holePassword,
  };
  console.log(holeToConsole);

  hole.target.reset();
});
