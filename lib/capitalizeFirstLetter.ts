export default function capitalizeFirstLetter(word: string) {
  return word.at(0)!.toUpperCase().concat(word.slice(1, word.length));
}
