function compress(chars) {
  let count = 1;
  let compressedIndex = 0;

  function compressHelper(index) {
    if (index === chars.length) {
      if (count > 1) {
        const countChars = count.toString().split("");
        for (let i = 0; i < countChars.length; i++) {
          chars[compressedIndex] = countChars[i];
          compressedIndex++;
        }
      }
      return compressedIndex;
    }

    if (index > 0 && chars[index] === chars[index - 1]) {
      count++;
    } else {
      if (count > 1) {
        const countChars = count.toString().split("");
        for (let i = 0; i < countChars.length; i++) {
          chars[compressedIndex] = countChars[i];
          compressedIndex++;
        }
      }

      chars[compressedIndex] = chars[index];
      compressedIndex++;
      count = 1;
    }

    return compressHelper(index + 1);
  }

  return compressHelper(0);
}

// Example usage:
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const compressedLength = compress(chars);
console.log(compressedLength); // Output: 6
console.log(chars.slice(0, compressedLength)); // Output: ["a", "2", "b", "2", "c", "3"]