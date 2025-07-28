const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

//different method

function pyramid(char, rows, vertexUp) {
  let result = '\n';

  if (!vertexUp) {
    for (let i = 1; i <= rows; i++) {
      let spaces = ' '.repeat(rows - i);
      let pattern = char.repeat(2 * i - 1);
      result += spaces + pattern + '\n';
    }
  } else {
    for (let i = rows; i >= 1; i--) {
      let spaces = ' '.repeat(rows - i);
      let pattern = char.repeat(2 * i - 1);
      result += spaces + pattern + '\n';
    }
  }

  return result;
}

console.log(pyramid("o", 4, false));

console.log(pyramid("p", 5, true));
