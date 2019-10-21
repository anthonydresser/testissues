console.log('HERE');
if (process.env.fail === 'true') {
	throw 'FAILURE';
	// Adding a random comment
}
console.log('SUCCESS');
