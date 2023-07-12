function findAnagrams(s, p) {
  const result = [];

  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }

    const charCount = {};

    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
      if (charCount[char] === 0) {
        delete charCount[char];
      }
    }

    return Object.keys(charCount).length === 0;
  }

  function findAnagramsHelper(startIndex) {
    const endIndex = startIndex + p.length;
    const substring = s.substring(startIndex, endIndex);

    if (isAnagram(substring, p)) {
      result.push(startIndex);
    }

    if (endIndex < s.length) {
      findAnagramsHelper(startIndex + 1);
    }
  }

  findAnagramsHelper(0);

  return result;
}

// Example usage:
const s = "cbaebabacd";
const p = "abc";
const indices = findAnagrams(s, p);
console.log(indices); // Output: [0, 6]