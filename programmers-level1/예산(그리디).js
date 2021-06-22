function solution(d, budget) {
  const sortedPrice = d.sort((a, b) => a - b); // 오름차순 정렬
  let dSum = 0;
  let result = 0;

  for (let i = 0; i < sortedPrice.length; i++) {
    // 먼저 budget과 비교하여 크면 바로 반복문 끝내기
    if (dSum + sortedPrice[i] > budget) break;
    else {
      dSum += sortedPrice[i]; // // budget보다 합이 작으면 합을 수행
      result += 1; // 부서의 수 +1
    }
  }
  return result;
}
