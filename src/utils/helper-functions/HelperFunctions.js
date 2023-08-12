export const totalSum = (list, objKey) =>
  list.reduce((acc, curr) => acc + Number(curr[objKey]), 0);
