'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase($capitalize){
    $capitalize = $capitalize.split(" ");
    for ( let i =0; i< $capitalize.length; i++)$capitalize[i] = $capitalize[i][0].toUpperCase() + $capitalize[i].substr(1);
  return $capitalize.join(" ");
}



//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function', 'Should be a function')
assert.strictEqual(jadenCase.length, 1, 'Should takes 1 arguments')
assert.strictEqual(jadenCase('hello world'), 'Hello World')
assert.strictEqual(jadenCase('how are you ?'), 'How Are You ?')


// End of tests */
