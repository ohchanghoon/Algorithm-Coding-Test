function solution(number, k) {
  const arr = [];

  for (let i = 0; i < number.length; i += 1) {
    while (arr.length && arr[arr.length - 1] < number[i] && k > 0) {
      k -= 1;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);

  return arr.join('');
}
