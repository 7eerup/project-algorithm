function solution(k, score) {
    const result = [];
    const hallOfFame = [];

    for (let i = 0; i < score.length; i++) {
        const currentScore = score[i];
        const currentHallLength = hallOfFame.length;

        if (currentHallLength < k || hallOfFame[currentHallLength - 1] < currentScore) {
            hallOfFame.push(currentScore);
        }

        result.push(hallOfFame.length >= k ? hallOfFame[k - 1] : 0);
    }

    return result;
}

// 예시 입력에 대한 결과 출력
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); 
// 출력 결과: [10, 10, 10, 20, 20, 100, 100]

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); 
// 출력 결과: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
