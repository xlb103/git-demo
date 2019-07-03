//使用ES6中的rest参数特性实现一个可以返回任意多个数相加结果的函数
module.exports = function(...params) {
	let sum = 0;
	for(let value in params) {
  	sum+=value
	}
	return sum;
}