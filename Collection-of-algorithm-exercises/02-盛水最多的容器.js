function main(arr) {
    let left = 0
    let right = arr.length - 1
    let res = 0

    while (left < right) {
        const temp = (right - left) * Math.min(arr[left], arr[right])
        res = Math.max(res, temp)

        if (arr[right] > arr[left]) {
            left++
        } else {
            right--
        }
    }

    return res
}

console.log(main([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(main([1, 6, 2, 5, 4, 8, 3, 7]))
console.log(main([1, 6, 2, 5, 4, 8, 3]))