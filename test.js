console.log('HERE');
if (process.env.fail === 'true') {
	throw 'FAILURE';
	// Adding a random comment o no
}
console.log('SUCCESS');
