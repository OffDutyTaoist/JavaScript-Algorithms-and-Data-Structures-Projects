function mutation(arr) {
  const [first, second] = arr.map(str => str.toLowerCase());

  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}
