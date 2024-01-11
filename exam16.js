// 문자열 s가 주어졌을 때, 각 위치에서 자신과 가장 가까운 이전에 등장한 같은 글자까지의 거리를 구하는 함수
function solution(s) {
    const result = []; // 결과를 저장할 배열
    const lastSeen = {}; // 각 문자의 마지막 등장 위치를 기록할 객체

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i]; // 현재 위치의 문자

        // 해당 문자가 이전에 등장한 적이 없다면 -1을 결과 배열에 추가
        if (lastSeen[currentChar] === undefined) {
            result.push(-1);
        } else {
            // 현재 위치와 마지막 등장 위치의 차이를 결과 배열에 추가
            result.push(i - lastSeen[currentChar]);
        }

        // 현재 문자의 위치를 마지막 등장 위치로 갱신
        lastSeen[currentChar] = i;
    }

    return result; // 최종 결과 배열 반환
}

// 예제 테스트
console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
