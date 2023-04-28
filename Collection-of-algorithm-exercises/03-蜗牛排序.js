/**
 *
 * @param {number[]} nums
 * @param {number} rowsCount
 * @param {number} colsCount
 */
function main(nums, rowsCount, colsCount) {
  try {
    if (rowsCount * colsCount !== nums.length) return []

    if (rowsCount === 1) return [nums]


    let res = new Array(rowsCount).fill().map(() => new Array(colsCount).fill(0))
    let index = 1, x = 0, y = 0
    for (let i = 0; i < nums.length; i++) {
      res[x][y] = nums[i]
      x += index
      if (x > rowsCount - 1) {
        x = rowsCount - 1
        y++
        index = -1
      }
      if (x < 0) {
        x = 0
        y++
        index = 1
      }
    }
    return res
  } catch (error) {
    console.log(error.message)
  }

}

console.log(main([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4))
// console.log(main([1, 2, 3, 4], 1, 4))
// console.log(main([1, 3], 2, 2))
