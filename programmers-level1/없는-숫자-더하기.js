function solution(numbers) {
  return numbers.reduce((acc, cur) => acc - cur, 45);
}
// let sum = 45;

// numbers.map((num) => {
//   sum -= num;
// });
// console.log(sum);

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
solution(numbers);
