function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0));
console.log(findElement([1, 2, 3, 4], num => num > 2));
console.log(findElement(["hello", "world", "javascript"], str => str.length > 5));
console.log(findElement(["cat", "dog", "bird"], str => str.length > 10));
console.log(findElement([2, 4, 6, 8], num => num % 2 === 0));
console.log(findElement([], num => num > 0));
