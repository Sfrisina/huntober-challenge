// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//P takes in a number , print list from 1 - number provided
//R if is divisible by 3 return "fizz", if divisible by 5 return 'buzz', if divisible by 3 & 5 print 'Fizz Buzz'
//E 1 -
//  2 -
//   "fizz"
//  4
//  "buzz"
//P loop through numbers and print 'fizz', 'buzz' or "fizz buzz"  each number that is divisiable by 3, 5

function fizzBuzz(num) {
    for (let i = 1; i < num; i++) {
      if (i % 15 === 0) {
        console.log('fizz buzz')
      } else if (i % 3 === 0) {
        console.log('fizz')
      } else if (i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(i)
      }
    }
  }
  fizzBuzz(100)