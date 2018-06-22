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


// iterate the string
// if open paren 
//    push to stack
// else if close paren
// is empty? return current index
function matchParen(input) {
  if (input === null || input === '') return 0;

  let stack = new Stack();
  // iterate the string
  for (let i = 0; i < input.length; i++) {
    let s = input[i];
    // if open paren 
    //    push to stack
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
        // let top = stack.pop();
        if (!stack.pop() === '(') {
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
output = matchParen('(x + 1)(y + 2)');
console.log(output);


function sortStack(input) {
  let sorted = new Stack();
  
  // iterate if input has nodes
  while (input.top) {
    // get first value from input
    let temp = input.pop();
    console.log(`Temp: ${temp}`);
    
    // sorted has nodes and the top value is greater than the current value
    //    put the value from sorted back to the input
    while((sorted.top) && (peek(sorted) > temp)) {
      let topush = sorted.pop();
      console.log(`To Push: ${topush}`);
      input.push(topush);
    }    
    console.log(`Sorted Temp: ${temp}`);
    sorted.push(temp);
  }
  return sorted;
}

let unsorted = new Stack();
unsorted.push(2);
unsorted.push(1);
unsorted.push(3);
console.log('SORT');
let sorted = sortStack(unsorted);
display(sorted);
