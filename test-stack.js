'use strict';


function display(stack) {
  let currNode = stack.top;
  while (currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

function peek(stack) {
  return (stack.top)
    ? stack.top.data
    : null;
}

const Stack = require('./stack');

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// display(myStack);

// myStack.pop();
// display(myStack);
console.log(peek(starTrek));