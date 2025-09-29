const UNSORTED = [5, 2, 1, 3, 6, 4];

// Merge Sort pseudo code:
//      1. Sort the left half of the array (assuming n > 1)
//      2. Sort the right half of the array (assuming n > 1)
//      3. Merge the two halves together

export function renderMerge() {
    console.log("Unsorted: " + UNSORTED);
    console.log("SORTED:");
    console.log(mergeSort(UNSORTED));
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        console.log("Left:\t" + left + "\tRight:\t" + right);

        return merge(left, right);
    }
}

function displayArray(arr) {
    let index = 0;
    arr.forEach(i => {
        console.log(index ++ + " " + i);
    });
}

function merge(arr1, arr2) {

    // TODO: improve on duplicate values


    let i = 0;
    let j = 0;

    const arr = [];

    const n1 = arr1.length;
    const n2 = arr2.length;


    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
        else arr.push(arr2[j++]);
    }
    
    while (i < n1) arr.push(arr1[i++]);
    while (j < n2) arr.push(arr2[j++]);

    return arr;

}