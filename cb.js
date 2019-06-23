function fa(a, callback) {
	if (a == 1) {
		fb(3, callback);
	} else {
		callback('err: a != 1');
	}
}
function fb(b, callback) {
	if (b === 3) {
		callback('err: b == 3');
	} else {
		callback(null, 'b != 3');
	}
}

fa(1, function(err, res) {
	if (err) {
		console.error(err);
	} else {
		console.log('success');
		console.log(res);
	}
});
