/*
 * @Author: KeMull
 * @Date: 2021-01-26 15:51:53
 * @LastEditors: KeMull
 * @LastEditTime: 2021-01-26 17:50:03
 */
const saveData = (resolve, reject) => {
	setTimeout(() => {
		resolve('拿到了')
	}, 1000)
}
const a = new Promise(saveData)
a.then((res) => {
	console.log(
		'%c 🍣 res: ',
		'font-size:20px;background-color: #F5CE50;color:#fff;',
		res
	)
})

module.exports = {
	saveData,
}
