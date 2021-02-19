// Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции
// row (5) // 5 4 3 2 1

function row(n) {
	if (n === 0) {
		return;
	}

	console.log(n);

	row(n - 1);
}

row(5);

// var mass = [1, 2, 3, 4, 5];

// function row(arr, i) {
// 	if (i === arr.length) {
// 		return;
// 	}

// 	row(arr, i + 1);

// 	console.log(arr[i]);
// }

// row(mass, 0);