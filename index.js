var data = socrataResponse['data'];
var x = document.getElementById("poop");

var countsByBorough = _.countBy(data, function(datum) {
	var boroughName = datum[12];
	
	return boroughName;
});

_.each(countsByBorough, function(oneBoroughCount, oneBoroughName) {
	var bar = new String;

	_.times(Math.ceil(oneBoroughCount/7), function() {
		bar += x.outerHTML;
	});

	document.write(oneBoroughName + "<br>" + bar + "<br><br><br>");
});