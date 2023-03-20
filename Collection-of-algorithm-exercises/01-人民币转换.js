function main(str) {
    let [num1, num2] = str.toString(10).split('.')
    const strs = num1.replace(/(?=(\d{4})+$)/g, ".").split('.').filter(Boolean)

    const chars = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    const unit = ['', '拾', '佰', '仟']
    const bigUnit = ['', '万', '亿']

    // 转换四位以下的数字
    function _transform(numStr) {
        let result = ''
        for (let i = 0; i < numStr.length; i++) {
            const digit = +numStr[i]
            const c = chars[digit]
            const u = unit[numStr.length - i - 1]

            // 如果digit为'0'，则不加单位
            if (digit === 0) {

                // 如果result末尾不是'零'，才可以加
                if (result[result.length - 1] !== chars[0]) {
                    result += c
                }

            } else {
                result += c + u
            }
        }
        if (result[result.length - 1] === chars[0]) {
            result = result.slice(0, -1)
        }
        return result
    }

    // 组合人民币整数部分
    let result = '人民币'
    for (let i = 0; i < strs.length; i++) {
        const part = strs[i]
        const c = _transform(part)
        const u = c ? bigUnit[strs.length - i - 1] : ''
        result += c + u
    }

    if (result !== '人民币') {
        result = (result + '元').replace(/壹拾/g, '拾')
    }

    // 组合人民币小数部分
    if (num2 === '00') {
        result += '整'
    } else {
        if (num2[0] !== '0') {
            result += chars[num2[0]] + '角'
        }
        if (num2[1] !== '0') {
            result += chars[num2[1]] + '分'
        }
    }
    return result
}

console.log(main(11354684.02))