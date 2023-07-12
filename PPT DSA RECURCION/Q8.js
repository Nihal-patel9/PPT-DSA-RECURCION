function canSwapStrings(s, goal) {
  function helper(i, j, count) {
    if (count > 2) {
      return false;
    }

    if (i >= s.length && j >= goal.length) {
      return count === 2;
    }

    if (i < s.length && j < goal.length && s[i] === goal[j]) {
      return helper(i + 1, j + 1, count);
    }

    return (
      (i < s.length && helper(i + 1, j, count + 1)) ||
      (j < goal.length && helper(i, j + 1, count + 1))
    );
  }

  return helper(0, 0, 0);
}

// Example usage:
const s = "ab";
const goal = "ba";
const result = canSwapStrings(s, goal);
console.log(result); // Output: true