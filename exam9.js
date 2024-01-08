function solution(n) {
    // 3진법으로 변환
    let n_3 = '';
    while (n > 0) {
        n_3 = (n % 3) + n_3;
        n /= 3;
    }
    
    // 앞뒤로 뒤집기
    let n_3_rev = n_3.split('').reverse().join('');
    
    // 10진법으로 변환
    let n_10 = parseInt(n_3_rev, 3);
    
    return n_10;
}