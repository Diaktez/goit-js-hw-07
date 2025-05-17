const inHole = document.querySelectorAll('.item');
console.log(`Number of categories:${inHole.length}`);
console.log(`- - - - - - -`);

inHole.forEach(hole => {
  const titleHole = hole.querySelector('h2');
  const holeCount = hole.querySelectorAll('li');
  console.log(`Category: ${titleHole.textContent}`);
  console.log(`Elements: ${holeCount.length}`);
  console.log('=============');
});
