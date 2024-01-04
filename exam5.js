const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('첫 번째 정수를 입력하세요: ', (n) => {
  rl.question('두 번째 정수를 입력하세요: ', (m) => {
    for(let i = 0; i < m; i++) {
      let row = '';
      for(let j = 0; j < n; j++) {
        row += '*';
      }
      console.log(row);
    }
    rl.close();
  });
});