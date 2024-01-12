function solution(n, k) {
    // 소수인지 확인하는 함수
    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    // n을 k진수로 변환
    const convertToKBase = (n, k) => {
      let result = '';
      while (n > 0) {
        result = (n % k) + result;
        n = Math.floor(n / k);
      }
      return result;
    }
  
    let answer = 0; // 결과값을 저장할 변수
  
    const converted = convertToKBase(n, k); // n을 k진수로 변환
  
    const numbers = converted.split('0'); // 변환된 수를 0을 기준으로 나눔
  
    // 나눠진 각 숫자가 소수인지 확인하고 개수를 세기
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== '' && isPrime(parseInt(numbers[i]))) {
        answer++;
      }
    }
  
    return answer; // 결과 반환
  }
  
  const n = 437674;
  const k = 3;
  
  console.log(solution(n, k));
  