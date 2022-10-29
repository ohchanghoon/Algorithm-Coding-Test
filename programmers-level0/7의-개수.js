function solution(array) {
  return array
    .map((num) =>
      num
        .toString()
        .split("")
        .filter((num) => num === "7")
    )
    .flat().length;
}
