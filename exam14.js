function solution(k, tangerine) {
    const sizeCounts = {}; // 귤 크기별 개수를 저장할 객체

    // 귤 크기별 개수 계산
    for (const size of tangerine) {
        sizeCounts[size] = (sizeCounts[size] || 0) + 1;
    }

    // 개수를 기준으로 정렬
    const sortedSizes = Object.keys(sizeCounts).sort((a, b) => sizeCounts[b] - sizeCounts[a]);

    let selectedCount = 0; // 선택한 귤의 개수
    let distinctCount = 0; // 서로 다른 종류의 귤 개수

    // 크기가 가장 많은 귤부터 차례로 선택
    for (const size of sortedSizes) {
        const count = sizeCounts[size];
        selectedCount += Math.min(count, k);
        distinctCount++;
        k -= count;
        if (k <= 0) break;
    }

    return distinctCount;
}

// 테스트 케이스
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
