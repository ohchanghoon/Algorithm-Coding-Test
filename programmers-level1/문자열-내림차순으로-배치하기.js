function solution(s) {
  return s
    .split('') // ['Z','b','c','d','e','f','g']
    .sort() // ["Z","b","c","d","e","f","g"]
    .reverse() // ["g","f","e","d","c","b","Z"]
    .join(''); // "gfedcbZ"
}
