function groupAnagrams(strs) {
  const map = new Map();
  console.log("initial map:", map);

  for (const str of strs) {
    // Sort characters to create a common key for anagrams
    const key = str.split("").sort().join("");
    console.log(`Processing "${str}" with key "${key}"`);

    if (!map.has(key)) {
      map.set(key, []);
        console.log("Updated map after adding key:", map);
    }

    map.get(key).push(str);
  }
  console.log("Final map:", map);

  return Array.from(map.values());
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
