// Code your solutions in this file
function printBadges(nameArr) {
  for (var i = 0; i < nameArr.length; i++) {
    console.log(`Welcome ${nameArr[i]}! You are employee #${i+1}.`);
  }
  return nameArr;
}

function tailsNeverFails() {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails ++;
  }
  return `You got ${tails} tails in a row!`;
}
