import * as fs from 'fs';
import { mainFunction } from './function.js';

const input = fs.readFileSync(0, 'utf-8').trim();

const numbers: number[] = input.split(/\s+/).map(Number);

const number1: number = numbers[0];
const number2: number = numbers[1];
const number3: number = numbers[2];

console.log('number1 =', number1);
console.log('number2 =', number2);
console.log('number2 =', number3);
console.log('sum =', number1 + number2 + number3);
console.log('___________________________________');

mainFunction();
