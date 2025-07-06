function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); 
// Output: "A-tisket..."

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); 
// Output: "Peter Piper..."

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
  "A-tisket a-tasket A green and yellow basket".length)); 
// Output: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 
  "A-tisket a-tasket A green and yellow basket".length + 2)); 
// Output: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-", 1)); 
// Output: "A..."

console.log(truncateString("Absolutely Longer", 2)); 
// Output: "Ab..."
