function solution(k, m, score) {
    let answer = 0;
    let count = 0;
    let box = [];
    
    while(count < score.length) {
      let min = score[count];
      let temp = [];
      
      for(let i = 0; i < m && count < score.length; i++) {
        min = Math.min(min, score[count]);
        temp.push(score[count]);
        count++;
      }
      
      answer += min * m;
      box.push(temp);
    }
    
    return answer;
  }