export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const getHistoryYears: () => number[] = (): number[] => {
  const collect: number[] = []
  const startYear = 2009
  let year = new Date().getFullYear()

  while (year > startYear) {
    collect.push(year)
    year--
  }

  return collect
}