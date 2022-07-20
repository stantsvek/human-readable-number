module.exports = function toReadable(number) {
	let onesTeens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
	"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	let n = +number;

	if (n >= 0 && n <= 19) return onesTeens[n];
	if (n >= 20 && n <= 99 && n % 10 === 0) {
		return tens[Math.floor(n / 10 - 2)];
	}
	if (n >= 20 && n <= 99 && n % 10 !== 0) {
		return tens[Math.floor(n / 10 - 2)] + " " + toReadable(n % 10);
	}
	if (n % 100 === 0 && n % 100 === 0) {
		return toReadable(n / 100) + " " + "hundred";
	}
	if (n >= 100 && n <= 999 && n % 100 !== 0) {
		return toReadable(Math.floor(n / 100)) + " " + "hundred " + toReadable(n % 100);
	}
}