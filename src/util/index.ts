export const toTitleCase = (str: string, split = ' ') => {
  return str
    .toLowerCase()
    .split(split)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
