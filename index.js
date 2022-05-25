let courses = [
	{ name: 'Courses in England', prices: [0, 100] },
	{ name: 'Courses in Germany', prices: [500, null] },
	{ name: 'Courses in Italy', prices: [100, 200] },
	{ name: 'Courses in Russia', prices: [null, 400] },
	{ name: 'Courses in China', prices: [50, 250] },
	{ name: 'Courses in USA', prices: [200, null] },
	{ name: 'Courses in Kazakhstan', prices: [56, 324] },
	{ name: 'Courses in France', prices: [null, null] },
];

function filterCourses(range) {
	// минимальное значение диапазона
	const minPrice = range[0];
	// максимальное значение диапазона
	const maxPrice = range[1];

	let sortCourses;

	// если не заданы минимальные и максимальные значения диапазона, возвращаем все курсы
	if (minPrice === null && maxPrice === null) {
		sortCourses = courses;
		// если не задано только минимальное значения диапазона, возвращаем курсы, цена которых меньше максимального значения диапазона
	} else if (minPrice === null) {
		sortCourses = courses.filter(
			(course) => course.prices[1] <= maxPrice && course.prices[0] <= maxPrice
		);
		// если не задано только максимальное значения диапазона, возвращаем курсы, цена которых больше минимального значения диапазона
	} else if (maxPrice === null) {
		sortCourses = courses.filter(
			(course) => course.prices[0] >= minPrice || course.prices[0] === null
		);
		// если заданы оба значения диапазона, возвращаем курсы, цена которых входит в границы диапазона
	} else {
		sortCourses = courses.filter(
			(course) =>
				(course.prices[0] === null && course.prices[1] <= maxPrice) ||
				(course.prices[1] === null &&
					course.prices[0] >= minPrice &&
					course.prices[0] <= maxPrice) ||
				(course.prices[0] >= minPrice &&
					course.prices[1] <= maxPrice &&
					course.prices[0] <= maxPrice)
		);
	}

	// сортируем курсы по миниальнму значению диапазона цены
	sortCourses.sort((a, b) => {
		if (a.prices[0] > b.prices[0]) {
			return 1;
		}
		if (a.prices[0] < b.prices[0]) {
			return -1;
		}
		return 0;
	});

	return sortCourses;
}

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [null, null];

console.log(filterCourses(requiredRange1));
console.log(filterCourses(requiredRange2));
console.log(filterCourses(requiredRange3));
console.log(filterCourses(requiredRange4));
