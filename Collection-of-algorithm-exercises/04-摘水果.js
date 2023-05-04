// LeetCode-2106
/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
    let left = 0, right = 0, sum = 0, ans = 0
    const n = fruits.length
    while (right < n) {
        sum += fruits[right][1]
        while (left <= right && step(fruits, startPos, left, right) > k) {
            sum -= fruits[left][1]
            left++
        }
        ans = Math.max(ans, sum)
        right++
    }
    return ans
};

function step(fruits, startPos, left, right) {
    return Math.min(Math.abs(startPos - fruits[right][0]), Math.abs(startPos - fruits[left][0])) + fruits[right][0] - fruits[left][0]
}
