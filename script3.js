// Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!

function getFactorial(n) {
	if (n === 1) {
		return n;
	} else {
		return n * getFactorial(n - 1);
	}
}

var result = getFactorial(3);

console.log(result);