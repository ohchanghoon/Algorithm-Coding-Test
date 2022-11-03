function solution(my_string) {
  const strArr = my_string.split("");

  return strArr
    .map((str) => {
      if (str === str.toLowerCase()) return str.toUpperCase();
      return str.toLowerCase();
    })
    .join("");
}
