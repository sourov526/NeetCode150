def groupAnagrams(strs):
    map = {}
    for str in strs:
        key = ''.join(sorted(str))
        if key not in map:
            map[key] = []

        map[key].append(str)

    return list(map.values())

print(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))