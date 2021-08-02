function solution(price, money, count) {
  let countPrice = 0;

  for (let i = 1; i <= count; i += 1) {
    countPrice += price * i;
  }

  return countPrice > money ? countPrice - money : 0;
}
