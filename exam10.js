function solution(survey, choices) {
    let answer = [];
    for (let i = 0; i < survey.length; i++) {
        let score_R = score_T = score_C = score_F = score_J = score_M = score_A = score_N = 0;
        if (choices[i] == 1) {
            score_R = 3;
            score_N = 3;
        } else if (choices[i] == 2) {
            score_R = 2;
            score_N = 2;
        } else if (choices[i] == 3) {
            score_R = 1;
            score_N = 1;
        } else if (choices[i] == 5) {
            score_A = 1;
            score_T = 1;
        } else if (choices[i] == 6) {
            score_A = 2;
            score_T = 2;
        } else if (choices[i] == 7) {
            score_A = 3;
            score_T = 3;
        }
        
        if (survey[i][0] === 'R') {
            answer.push('R');
        } else if (survey[i][0] === 'T') {
            if (score_T > score_R) {
                answer.push('T');
            } else {
                answer.push('R');
            }
        } else if (survey[i][0] === 'C') {
            answer.push('C');
        } else if (survey[i][0] === 'F') {
            if (score_F > score_C) {
                answer.push('F');
            } else {
                answer.push('C');
            }
        } else if (survey[i][0] === 'J') {
            answer.push('J');
        } else if (survey[i][0] === 'M') {
            if (score_M > score_J) {
                answer.push('M');
            } else {
                answer.push('J');
            }
        } else if (survey[i][0] === 'A') {
            answer.push('A');
        } else if (survey[i][0] === 'N') {
            if (score_N > score_A) {
                answer.push('N');
            } else {
                answer.push('A');
            }
        }
    }
    return answer;
}