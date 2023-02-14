let expression = "{[({)]}}";

const isValidExpression = () => {
  let stack = [];
  let dataMapping = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let openBrackests = ["{", "[", "("];
  for (let i = 0; i < expression.length; i++) {
    if (openBrackests.includes(expression[i])) {
      stack.push(expression[i]);
    } else {
      if (expression[i] == dataMapping[stack[stack.length - 1]]) {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

let result = isValidExpression(expression);
console.log(result);
