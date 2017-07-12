var colors = {
	textColor: "white",
	complainantTextColor: "#7FBC78",
	accusedTextColor: "#E56A42"
}

var nodeBodyTextById = {  
	a:  "",
	b:  "",
	c:  "In rare cases, Title IX may: A. recognise a party involved in the incident report as repeat offender and/or B. deem the situation so severe it demands further investigation despite complainant declining it.",
	d:  "",
	e:  "Investigation begins. Parties sent a Notice of Concern, and interim measures are implemented on a case-by-case basis. Title IX investigator investigates by interviewing parties and witnesses and by collecting relevant documentary evidence. Title IX Coordinator makes a charging decision and notifies students",
	f1: "Outcome Letter Issued. Dissatisfied parties may appeal.",
	f2: "Hearing Schedule Set. Hearing File Released to Parties.",
	f3: "Non-Hearing Resolution and non-appealable Outcome Letter Issued (requires agreement by both parties).",
	g:  "Evidentiary Specialist (outside of Stanford) reviews any objections relating to contents of Hearing File. Parties submit statements in response to the Hearing File 1. Three trained panelists review Hearing File, meet with parties and witnesses 2. Deliberate and determine responsibility using preponderance of the evidence standard 3. Parties notified of outcome",
	h:  "",
	i:  "Sanctioning and Remedies imposed. 1. Both parties may submit sanction statement to the panelists 2. Hearing panel determines disciplinary outcome and Title IX Coordinator sets ongoing remedies for protection of complainant and campus 3. Outcome Letter issued to parties",
	j:  "Either party may appeal Outcome Letter after hearing or no charge. Automatic appeal to Provost if expulsion upheld.",
	// k currently unused
	l:  "",
	m:  ""
}

var complainantNodeIds = [
"a",
"b",
"d",
"f3",
"i",
"j",
"l"
];

var accusedNodeIds = [
"d",
"f3",
"i",
"j"
];

var config = {
	startOnLoad: true,
	flowchart: {
		useMaxWidth:true,
		htmlLabels: true
	}
};


$(document).ready(function() {
	mermaid.initialize(config);
	setTimeout(runProgram, 0);
})

function runProgram() {
	instantiateTooltips();
	highlightInvolvements();

}

function instantiateTooltips() {
	Object.keys(nodeBodyTextById).forEach(function(id) {
		var nodeDiv = $("#" + id + " div");
		nodeDiv.prop("title", nodeBodyTextById[id]);
		if (nodeBodyTextById[id] !== "") { 
			nodeDiv.css("text-decoration", "underline"); // indicite there's more info on hover
		}
	});
	$(document).tooltip();

	$("rect").prop("fill", "skyblue");
}


function highlightInvolvements() {
	onNodeMouseEnter("show-complainant", complainantNodeIds, colors.complainantTextColor);
	onNodeMouseLeave("show-complainant", complainantNodeIds, colors.textColor);

	onNodeMouseEnter("show-accused", accusedNodeIds, colors.accusedTextColor);
	onNodeMouseLeave("show-accused", accusedNodeIds, colors.textColor);
}



function onNodeMouseEnter(btnId, nodeIdArr, textColor) {
	$("#" + btnId).mouseenter(function(e) {
		nodeIdArr.forEach(function(id) {
			$("#" + id + " div").css("color", textColor);
			$("#" + id).prop("background", "skyblue");
		})
	});
}

function onNodeMouseLeave(btnId, nodeIdArr, textColor) {
	$("#" + btnId).mouseleave(function(e) {
		nodeIdArr.forEach(function(id) {
			$("#" + id + " div").css("color", textColor);
		})
	});
}