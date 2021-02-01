/*
 * @Author: KeMull
 * @Date: 2021-01-26 17:45:30
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-26 18:07:30
 */
// 导入相同的一个文件  只会初始化运行一次
const saveData = require('./index')
const saveDatas = require('./index')
console.log(saveData === saveDatas)

const fn = (a) => {
	if (a === 1) {
		throw new Error('1')
	}
	if (a === 1) {
		return 2
	}
}
console.log(fn(1))
