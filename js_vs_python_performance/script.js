// Test 1 Add two numbers
let timeList1 = [];

for (let i=0; i <= 1000; i++) {
    let start = performance.now();

    for (let i = 0; i <= 10000; i++) {
        addNums(1, 2);
    }

    let end = performance.now();
    let total = end - start;
    timeList1.push(total);
}

console.log(Math.max.apply(Math, timeList1));


// Test 2 Power the number
let timeList2 = [];

for (let i=0; i <= 1000; i++) {
    let start = performance.now();

    Math.pow(123, 123);

    let end = performance.now();
    let total = end - start;
    timeList2.push(total);
}

console.log(Math.max.apply(Math, timeList2));


// Test 3 Generate array with random numbers from 0 to 10
let timeList3 = [];

for (let i=0; i <= 1000; i++) {
    let start = performance.now();

    generateList();

    let end = performance.now();
    let total = end - start;
    timeList3.push(total);
}

console.log(Math.max.apply(Math, timeList3));


// Test 4 Sort array with random numbers from 0 to 10 with "Quick sort" algorithm
let timeList4 = [];
let randomNumList = generateList();

for (let i=0; i <= 1000; i++) {
    let start = performance.now();

    quickSort(randomNumList);

    let end = performance.now();
    let total = end - start;
    timeList4.push(total);
}

console.log(Math.max.apply(Math, timeList4));


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