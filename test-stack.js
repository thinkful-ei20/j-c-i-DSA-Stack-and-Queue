'use strict';

let output;

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

starTrek.pop();
display(starTrek);



function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  let palindrome = '';
  let currNode = stack.top;
  while (currNode) {
    palindrome += currNode.data;
    currNode = currNode.next;
  }

  return (s === palindrome);
}

// true, true, true
console.log('*** PALINDROME ***');
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));


function matchParen(input) {
  if (input === null || input === '') return 0;

  let stack = new Stack();
  for (let i = 0; i < input.length; i++) {
    let s = input[i];
    if (s === '(') {
      console.log(`${s} found at ${i}`);
      stack.push(s);
    }
    else if (s === ')') {
      console.log(`${s} found at ${i}`);
      if (stack.top === null) {
        return i + 1;
      }
      else {
        let top = stack.pop();
        if (!top.value === '(') {
          return i + 1;
        }
      }
    }
  }
  return 0;
}

console.log('*** MATCH PAREN *** ');
output = matchParen(null);
console.log(output);
output = matchParen('');
console.log(output);
output = matchParen('(x + 1))(y + 2');
console.log(output);
