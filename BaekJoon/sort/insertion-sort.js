// 삽입정렬

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let cur = arr[i];
    let left = i - 1; // 0부터

    while (left >= 0 && arr[left] > cur) {
      arr[left + 1] = arr[left];
      left--; // left를 1감소 시키기 때문에 앞에서 이미 정렬된 부분과 비교할 수 있음
    }

    arr[left + 1] = cur;
    console.log(`${i}회전: ${arr}`);
  }

  return arr;
}
console.log(insertionSort([9, 2, 5, 1, 3]));
