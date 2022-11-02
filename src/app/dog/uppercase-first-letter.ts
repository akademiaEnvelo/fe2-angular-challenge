export function upperCaseFirstLetter(str: string) {
  const firstLetter = str.charAt(0);

  return str.replace(firstLetter, firstLetter.toUpperCase());
}
