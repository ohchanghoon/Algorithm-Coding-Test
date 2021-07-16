// 선택정렬
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
    console.log(`${i + 1}회전: ${arr}`);
  }

  return arr;
}
console.log(selectionSort([9, 2, 5, 1, 3]));
