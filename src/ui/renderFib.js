
export async function renderFib() {
    fibs(10);
}

async function fibs(n) {

    // iterative version:
    // TODO: each time throught the for loop, display in three separate cards across the screen:
    //      1. value i, prev, current
    //      2. updated fibs array
    //      3. current line of code running?
    //      have this all sync up with the code running maybe?
    let current = 1;
    let prev = 0;
    let temp = 0;
    let arr = [];
    for(let i = 0; i < n; i++) {
        if(i == 0){
            arr.push(i);
            continue;
        }
        if(i == 1) {
            arr.push(i);
            continue;
        }
        temp = current;
        current = current + prev;
        prev = temp;
        arr.push(current);
    }
    displayArray(arr);
    
}

async function fibsRecursive(n) {
    // Recursive version:
    // TODO: for each call of the function, display in cards across the screen:
    //      1. this functions value for n
    //      2. an updated call stack
    //      3. updated fib array

    // TODO: Figure out how to track this with an array
    let thisFib;
    if(n < 2) return n;
    else {
        thisFib = fibsRecursive(n-1) + fibsRecursive(n-2)
        return thisFib;
    };
} 

function displayArray(arr) {
    // for displaying the array
    let track = 1;    
    arr.forEach(i => {
        
        console.log(track++ + ": " + i);
    });
}