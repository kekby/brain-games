import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  sayHello(name);
  return name;
};
