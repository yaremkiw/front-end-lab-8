function collectIds (array) {
	let collectedArray = getFilteredArray(array, function(element){
		return element.rating > 3.0;
	});
	collectedArray = getTransformedArray(collectedArray, function(element){
		return element.id;
	})