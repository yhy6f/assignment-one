$(document).ready(function() {
    
    getData();

});

function getData(){

	$.getJSON("columbia.json", function(schoolData) {
		//Callback runs after the data is loaded.
		console.log(schoolData);
		loopThroughData(schoolData);
	})

}
function addTwoNumbers(num1, num2) {
	console.log(num1+num2);
}

function loopThroughData(s) {

	for (i=0; i<s.length; i++) {
		var schoolName = s[i]["SCHOOL_NAME"];
		var year = s[i]["YEAR"];
		var gradPct = s[i]["GRADUATES_PCT"];
		//&& to indicate and AND condition
		//if (gradPct < 50 && gradPct > 0) {
			//console.log(year, schoolName, gradPct);
		//}
		var barwidth = gradPct * 10;
		if (schoolName === "FREDERICK DOUGLASS HIGH")
			$(".chart").append(
				"<div class='bar' style='width: "+barwidth+"px'></div>"
			);
	}

} 





