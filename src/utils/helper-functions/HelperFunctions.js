export const totalSum = (list, objKey) =>
  list.reduce((acc, curr) => acc + curr[objKey], 0);
