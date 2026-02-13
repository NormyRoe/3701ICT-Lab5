export const playMove = (idx, steps, lastP) => {
  const newSteps = steps.slice(0, lastP);
  newSteps.push(idx);
  return newSteps;
};
export const buildBoard = (steps, lastP) => {
  const board = Array(9).fill("");
  for (let i = 0; i < lastP; ++i) {
    const c = i % 2 ? "O" : "X";
    board[steps[i]] = c;
  }
  return board;
};
