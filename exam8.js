function solution(want, number, discount) {
    let result = 0;

    for (let i = 0; i <= discount.length - want.length; i++) {
        let available = true;

        for (let j = 0; j < want.length; j++) {
            if (want[j] !== discount[i + j] || number[j] > 1) {
                available = false;
                break;
            }
        }

        if (available) {
            result += 10;
            i += want.length - 1;
        }
    }

    return result;
}

// 예시
const example1 = solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
);
console.log(example1);  // 출력: 3

const example2 = solution(
    ["apple"],
    [10],
    ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]
);
console.log(example2);  // 출력: 0
