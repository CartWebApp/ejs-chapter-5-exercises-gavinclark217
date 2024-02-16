let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flatten(array) {
    return array.reduce((flat, current) => flat.concat(current), []);
}

console.log(flatten(arrays));

// → [1, 2, 3, 4, 5, 6]