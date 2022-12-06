function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);

    return emergency.map((num) => sorted.indexOf(num) + 1);
}
