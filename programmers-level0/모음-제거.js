function solution(my_string) {
  const collections = ["a", "e", "i", "o", "u"];

  return my_string
    .split("")
    .filter((str) => collections.indexOf(str) === -1)
    .join("");
}
