function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, i) => (signs[i] ? acc + cur : acc - cur),
    0
  );
}
