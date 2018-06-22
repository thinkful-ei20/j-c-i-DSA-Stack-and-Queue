'use strict';


function display(stack) {
  let currNode = stack.top;
  while(currNode) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

const Stack = require('./stack');

const myStack = new Stack();

myStack.push('A');
myStack.push('B');
myStack.push('C');
display(myStack);

myStack.pop();
display(myStack);
