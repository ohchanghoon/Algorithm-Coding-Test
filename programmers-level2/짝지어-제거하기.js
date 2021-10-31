function solution(s) {
  const div = s.split('');
  const arr = [];

  for (let i = 0; i < div.length; i += 1) {
    if (!arr.length || arr[arr.length - 1] !== div[i]) {
      arr.push(div[i]);
    } else {
      arr.pop();
    }
  }
  return !arr.length ? 1 : 0;
}
