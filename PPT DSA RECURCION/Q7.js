function decodeString(s) {
  let index = 0;

  function decodeHelper() {
    let result = "";

    while (index < s.length && s[index] !== "]") {
      if (isNaN(parseInt(s[index]))) {
        result += s[index];
        index++;
      } else {
        let count = 0;
        while (!isNaN(parseInt(s[index]))) {
          count = count * 10 + parseInt(s[index]);
          index++;
        }
        index++; // Skip the opening bracket '['
        const decodedString = decodeHelper();
        index++; // Skip the closing bracket ']'
        result += decodedString.repeat(count);
      }
    }

    return result;
  }

  return decodeHelper();
}

// Example usage:
const s = "3[a]2[bc]";
const decodedString = decodeString(s);
console.log(decodedString); // Output: "aaabcbc"