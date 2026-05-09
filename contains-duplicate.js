// problem link: https://neetcode.io/problems/duplicate-integer/question?list=neetcode150

function containsDuplicate(nums) {
    const seen = new Set();
    

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
        console.log(seen);
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 3])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false