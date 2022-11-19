function solution(array, n) {
    array.push(n);
    const idx = array.push.sort((a, b) => a - b).indexOf(n);
    return array[idx + 1] - array[idx] < array[idx] - array[idx - 1]
        ? array[idx + 1]
        : array[idx - 1];
}
