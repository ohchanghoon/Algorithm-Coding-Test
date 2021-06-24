function solution(arr, divisor) {
    
    const answer = [];
    arr.forEach((el) =>  el % divisor === 0 && answer.push(el));
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}
