const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

function getRandomCode() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  return `console.log(${num1} + ${num2});`;
}

getRandomCode();
