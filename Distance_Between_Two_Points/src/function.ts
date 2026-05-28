import * as fs from 'fs';

export const mainFunction = () => {
  
  const input = fs.readFileSync(0, 'utf-8').trim();

  const numbers: number[] = input.split(/\s+/).map(Number);

  const points: number[] = [];

  if (numbers.length !== 4) {
      throw new Error('Input must contain exactly 4 numbers: x1 y1 x2 y2');
  }

  for (let i = 0; i < numbers.length; i += 2){
    const x = numbers[i];
    const y = numbers[i + 1];

    if (x === undefined || y === undefined) {
      throw new Error('Input must contain pairs of numbers: x y');
    }
  
    points.push(x, y);
  }
    secondFunction(points)
}

const secondFunction = (data: number[]): void => {
  const values = data.slice(0, 4);

  if (values.some((value) => value === undefined) || values.length !== 4) {
    console.log('values =', values);
    throw new Error('Input must contain exactly 4 numbers: x1 y1 x2 y2');
  }

  const [x1, y1, x2, y2] = values as [number, number, number, number];

  console.log( (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** (1 / 2));
};