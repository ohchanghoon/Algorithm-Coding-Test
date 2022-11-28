function solution(n) {
    return Array(n)
        .fill(0)
        .map((v, idx) => idx + 1)
        .filter((num) => !(n % num));
}
