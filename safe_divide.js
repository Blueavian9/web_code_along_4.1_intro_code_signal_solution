function solution(numerator, denominator) {
  // check the value of the denominator
  if (denominator == 0) {
    return 0
  } else {
    return numerator / denominator
  }
}

console.log(solution(2, 3))
console.log(solution(2, 0))
