function solution(price, money, count) {
    // 총 필요한 놀이기구의 이용 금액 계산
    const totalCost = price * (count * (count + 1)) / 2;

    // 부족한 금액 계산
    const shortage = Math.max(0, totalCost - money);

    return shortage;
}

// 예시 입력에 대한 결과 출력
console.log(solution(3, 20, 4)); // 출력 결과: 10