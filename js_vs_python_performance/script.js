randomNumList = generateList();

console.time('Func 1');
for (let i=0; i <= 10000; i++) {
    addNums(1, 2);
}
console.timeEnd('Func 1');

console.time('Func 2');
Math.pow(123, 123);
console.timeEnd('Func 2');

console.time('Func 3');
generateList();
console.timeEnd('Func 3');

console.time('Func 4');
quickSort(randomNumList);
console.timeEnd('Func 4');

function addNums(a, b) {
    return a + b;
}

function generateList() {
    return Array.from({length: 10000}, () => Math.floor(Math.random() * 10));
}

function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}