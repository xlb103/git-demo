module.exports = function(...params) {
	let sum = 0;
	for(let value in params) {
  	sum+=value
	}
	return sum;
}