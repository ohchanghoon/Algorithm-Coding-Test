// function solution(board, moves) {
//   let count = 0;
//   let stack = [];

//   for (let i = 0; i < moves.length; i++) {
//     let now = moves[i] - 1;
//     for (let j = 0; j < board.length; j++) {
//       if (board[j][now] !== 0) {
//         if (stack[stack.length - 1] === board[j][now]) {
//           stack.pop();
//           count += 2;
//         } else {
//           stack.push(board[j][now]);
//         }
//         board[j][now] = 0;
//         break;
//       }
//     }
//   }
//   return count;
// }
function solution(board, moves) {
  const stack = [];
  let result = 0;

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i][move - 1]) {
        if (stack[stack.length - 1] === board[i][move - 1]) {
          stack.pop();
          result += 2;
        } else {
          stack.push(board[i][move - 1]);
        }
        board[i].splice(move - 1, 1, 0);
        break;
      }
    }
  });
  return result;
}
