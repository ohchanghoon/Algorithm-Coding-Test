function solution(sizes) {
  let w = 0;
  let h = 0;

  sizes.forEach((arr) => {
    const [a, b] = arr.sort((a, b) => b - a);
    if (a > w) w = a;
    if (b > h) h = b;
  });
  return w * h;
}
