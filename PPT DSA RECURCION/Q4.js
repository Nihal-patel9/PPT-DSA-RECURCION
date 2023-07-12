class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function str2tree(s) {
  if (s === "") {
    return null;
  }

  const stack = [];
  let num = "";
  let i = 0;

  // Extract the root value from the string
  while (i < s.length && s[i] !== "(" && s[i] !== ")") {
    num += s[i];
    i++;
  }

  const root = new TreeNode(parseInt(num));
  stack.push(root);

  while (i < s.length) {
    if (s[i] === "(") {
      i++;
      num = "";

      // Extract the value for the child node
      while (i < s.length && s[i] !== "(" && s[i] !== ")") {
        num += s[i];
        i++;
      }

      const newNode = new TreeNode(parseInt(num));
      const parent = stack[stack.length - 1];

      if (!parent.left) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }

      stack.push(newNode);
    } else if (s[i] === ")") {
      stack.pop();
      i++;
    }
  }

  return root;
}

function inorderTraversal(root) {
  const result = [];

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }

  inorder(root);
  return result;
}

// Example usage:
const s = "4(2(3)(1))(6(5))";
const root = str2tree(s);
const inorderResult = inorderTraversal(root);
console.log(inorderResult); // Output: [3, 2, 1, 4, 5, 6]