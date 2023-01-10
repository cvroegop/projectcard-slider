export function getInitialOrder<T>(arr: T[], cardsToShift: number): number[] {
  const arrKeys = [...Array(arr.length).keys()];
  return arrKeys
    .slice(2, arrKeys.length)
    .concat(arrKeys.slice(0, cardsToShift));
}
