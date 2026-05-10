function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (map.has(difference)) {
            return [map.get(difference), i];
        }

        map.set(nums[i], i);
    }
}

console.log(twoSum([3, 5, 6, 4], 7)); // [0, 1]