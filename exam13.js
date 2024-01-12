function solution(lotto, win_num) {
    const rank = [6, 6, 5, 4, 3, 2, 1]; // 각 순위에 해당하는 맞힌 번호의 개수

    const zeroCount = lotto.filter(num => num === 0).length; // 알아볼 수 없는 번호의 개수
    const matchCount = lotto.filter(num => win_num.includes(num)).length; // 일치하는 번호의 개수

    const highRank = rank[zeroCount + matchCount]; // 최고 순위
    const lowRank = rank[matchCount]; // 최저 순위

    return [highRank, lowRank];
}

// 테스트 케이스
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
