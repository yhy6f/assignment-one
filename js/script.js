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

function loopThroughData(s) {

	for (i=0; i<s.length; i++) {
		var schoolName = s[i]["SCHOOL_NAME"];
		var year = s[i]["YEAR"];
		var gradPct = s[i]["GRADUATES_PCT"];
		var dropout = s[i]["DROPOUT_9_12_COHORT"];
		var barwidth = dropout*10;
		if (schoolName ==="FREDERICK DOUGLASS HIGH") {
			$(".chart").append(
				"<p>"+year+":"+" "+dropout+"</p>"+
				"<div class='bar' style='width: "+barwidth+"px'></div>"
				);
		}
        
	}

} 





