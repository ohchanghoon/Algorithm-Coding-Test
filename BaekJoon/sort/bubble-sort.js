// 버블 정렬
// 구조분해할당

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // arr.length - i 만 해주어도 문제 없음
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(`${i + 1}회전: ${arr}`);
  }
  return arr;
}
