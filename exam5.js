const readline = require('readline');  // require 문 사용 readline 모듈 불러오기

const rl = readline.createInterface({   // readline 인터페이스 생성 및 입력과 출력
  input: process.stdin,
  output: process.stdout
});

rl.question('첫 번째 정수를 입력하세요: ', (n) => {   // 메시지 출력 사용자 입력한 값 n변수 저장
  rl.question('두 번째 정수를 입력하세요: ', (m) => {   // 메시지 출력 사용자 입력한 값 m변수 저장
    for(let i = 0; i < m; i++) {      // m 변수의 값만큼 반복문 실행
      let row = '';
      for(let j = 0; j < n; j++) {    // n 변수의 값만큼 반복문 실행
        row += '*';
      }
      console.log(row);
    }
    rl.close();
  });
});
