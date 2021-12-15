function solution(s) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  numbers.map((number, idx) => {
    const arr = s.split(number);
    s = arr.join(idx);
  });
  return Number(s);
}
