def twoSum(nums, target):
    map = {}
    for i in range(len(nums)):
        diff = target - nums[i]
        if diff in map:
            return [map[diff], i]

        map[nums[i]] = i

print(twoSum([2, 7, 11, 15], 9))