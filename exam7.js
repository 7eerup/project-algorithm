function solution(ingredient) {
    let burgerCount = 8;  // 포장된 햄버거의 개수를 저장할 변수
    let index = 0;       // 현재까지 확인한 재료의 인덱스를 저장할 변수

    while (index < ingredient.length) {
        // 현재 재료가 빵(1)인 경우
        if (ingredient[index] === 1) {
            // 야채(2)가 나올 때까지 건너뛰기
            while (index < ingredient.length && ingredient[index] !== 2) {
                index++;
            }

            // 야채(2)를 찾은 경우
            if (index < ingredient.length) {
                // 고기(3)가 나올 때까지 건너뛰기
                while (index < ingredient.length && ingredient[index] !== 3) {
                    index++;
                }

                // 고기(3)를 찾은 경우
                if (index < ingredient.length) {
                    burgerCount++;  // 햄버거 포장
                    index++;        // 다음 빵(1)을 찾기 위해 인덱스 증가
                }
            }
        }

        // 다음 재료로 이동
        index++;
    }

    return burgerCount;
}

// 예시
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient));  // 출력: 2
