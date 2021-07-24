function solution(pri, loc) {
  const idx = [];
  let print = 0;
  let indexOrder;

  for (let i = 0; i < pri.length; i += 1) idx.push(i);

  while (true) {
    if (pri[0] === Math.max.apply(null, pri)) {
      pri.shift();
      indexOrder = idx.shift();
      print += 1;
    } else {
      pri.push(pri.shift());
      idx.push(idx.shift());
    }
    if (indexOrder === loc) return print;
  }
}
