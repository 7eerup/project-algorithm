function solution(numbers, target) {
    let answer = 0; // 결과값을 저장할 변수
    
    // 깊이 우선 탐색(Depth First Search)을 수행하는 재귀 함수
    const dfs = (index, sum) => {
      // 모든 숫자를 다 탐색한 경우
      if (index === numbers.length) {
        // 타겟 넘버와 일치하는 경우 결과값을 증가시킴
        if (sum === target) {
          answer++;
        }
        return; // 재귀 종료
      }
      
      // 현재 숫자를 더하거나 빼는 두 가지 경우를 모두 탐색
      dfs(index + 1, sum + numbers[index]); // 현재 숫자를 더하는 경우
      dfs(index + 1, sum - numbers[index]); // 현재 숫자를 빼는 경우
    }
    
    dfs(0, 0); // 재귀 함수 호출
    
    return answer; // 최종 결과 반환
  }
  
  const numbers = [1, 1, 1, 1, 1];
  const target = 3;
  
  console.log(solution(numbers, target));  