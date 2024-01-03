function solution(food) {
    let answer = "";
    let sum = 0;
    for(let i = food.length - 1; i >= 0; i--) {
        sum += food[i];
        for(let j = 0; j < food[i]; j++) {
            answer += (i+1).toString();
        }
    }
    return answer;
}