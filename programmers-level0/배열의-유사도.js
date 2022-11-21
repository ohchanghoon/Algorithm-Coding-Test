function solution(s1, s2) {
    return s1
        .map((str) => s2.includes(str))
        .filter((boolean) => boolean === true).length;
}