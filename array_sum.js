function solution(a) {
  let sum = 0;
  for (i = 0; i < a.length; i++) {
    const value = a[i];
    sum += value;
  }
  return sum;
}

console.log(solution([]));
console.log(solution([1, 2]));
console.log(solution([2, 4, 8]));
