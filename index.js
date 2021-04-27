const test = document.getElementById('test')
//console.log(test);

test.addEventListener('dblclick', () => {

	var output = document.getElementById('output')
	console.log(test);
	output.innerHTML = `<a href="https://www.youtube.com/watch?v=T-YQrScC-F4" target="_blank">Bravo!</a>`;

})