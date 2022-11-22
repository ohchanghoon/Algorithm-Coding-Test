function solution(sides) {
    const max = Math.max(...sides);
    sides.splice(sides.indexOf(max), 1);

    return max < sides.reduce((acc, cur) => acc + cur) ? 1 : 2;
}
