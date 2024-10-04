
function sum_Of_Cube(m, n) {
    if (m > n) {
        return 0;
    }

    let sum = 0;
    for (let i = m; i <= n; i++) {
        sum +=(i*i*i); 
    }

    return sum;
}


console.log(sum_Of_Cube(2, 4)); 
// Output: 99 
//Explanation:(2^3 + 3^3 + 4^3 = 8 + 27 + 64 = 99)
console.log(sum_Of_Cube(5, 3)); // Output: 0 
//Explanation:(m > n)
