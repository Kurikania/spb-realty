
/**
 * Same as PHP number_format()
 * @param {string | number} number
 * @param {number} decimals
 * @param {string} dec_point
 * @param {string} thousands_sep
 * @returns {string}
 */
export function nf(number, decimals = 0, dec_point = ',', thousands_sep = ' ') {
	number = ((number + '')).replace(/[^0-9+\-Ee.]/g, '');
	const n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		toFixedFix = function (n, prec) {
			const k = Math.pow(10, prec);
			return '' + Math.round(n * k) / k;
		};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	let s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}

/**
 * Same as nf for currency formatting.
 * Appends ₽ (rouble sign) to output.
 * @param number
 * @param decimals
 * @param dec_point
 * @param thousands_sep
 * @returns {string}
 */
export function cf(number, decimals = 0, dec_point = ',', thousands_sep = ' ') {
	return nf(number, decimals, dec_point, thousands_sep)+" ₽";
}

/**
 * Same as cf, but does not appends ₽ (rouble sign) to ouput.
 * @param str
 * @param decimals
 * @returns {string}
 */
export function price(number, decimals = 0, dec_point = ',', thousands_sep = ' ') {
	return nf(number, decimals, dec_point, thousands_sep);
}


/**
 * Форматирует строку в вид номера телефона: +7 (999) 999-99-99.
 * @param str
 * @returns {*}
 */
export function phone(str) {
	if ( !str ) return '';
	return str.replace(/\+7(\d{3})(\d{3})(\d{2})(\d{2})/,"+7 ($1) $2-$3-$4");
}

