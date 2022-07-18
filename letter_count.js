function solution(s, letter) {
  let count = 0
  for (i = 0; i < s.length; i++) {
    const char = s[i]
    if (char == letter) {
      count++
    }
  }
  return count
}

console.log(solution('this is a test', 's'))
console.log(solution('this is a test', 'z'))
