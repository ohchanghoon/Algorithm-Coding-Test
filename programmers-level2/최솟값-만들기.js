function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  // return A.reduce((sum, val, idx) => sum += A[idx] * B[idx],0)
  let sum = 0;
  for (let i = 0; i < A.length; i += 1) {
    sum += A[i] * B[i];
  }
  return sum;
}
