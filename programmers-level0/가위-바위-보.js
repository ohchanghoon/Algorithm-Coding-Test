function solution(rsp) {
  const arr = ["0", "2", "5"];

  return rsp
    .split("")
    .map((num) => arr.at(arr.indexOf(num) - 1))
    .join("");
}
