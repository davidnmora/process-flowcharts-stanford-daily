var nodeBodyTextById = {  
	titleIX: "Title IX recieves report directrly from complainant, or indirectly",
	contactCompl: "Title IX contacts Complainant directly, with options and resources.",
	complDeclinesName: "Complainant declines to name accused party",
	complNames: "Complainant names accused party",
	complDeclinesInvest: "Complainant declines a further investigation",
	complRequestsInvest: "Complainant requests investigation",

	investClosed: "Investigation closed",
	titleIXCont: "Title IX recognises a party involved in incident report as repeat offender and/or deems the situation so severe it demands further investigation despite complainant declining it, and continues investigation",

	noticeOfConcernSent: "Parties sent a Notice of Concern, and interim measures are implemented on a case-by-case basis. Title IX investigator investigates by interviewing parties and witnesses and by collecting relevant documentary evidence",
	chargingDecisionReleased: "Title IX Coordinator makes a charging decision and notifies students",
	noCharge: "a. No Charge and Outcome Letter Issued. Dissatisfied parties may appeal",
	nonHearingRes: "b. Non-Hearing Resolution and non-appealable Outcome Letter Issued -- Requires agreement by both parties",
	charged: "c. Charged, Hearing Schedule Set. Hearing File Released to Parties",

	chargeReviewed: "Evidentiary Specialist, outside of Stanford, reviews any objections relating to contents of Hearing File. Parties submit statements in response to the Hearing File: A. Three trained panelists review Hearing File, meet with parties and witnesses B. Deliberate and determine responsibility using preponderance of the evidence standard C. Parties notified of outcome",
	responsibilityNotFound: "No findings of responsibilities.",
	responsibilityFound: "Finding of Responsibility, Sanctioning and Remedies imposed. A. Both parties may submit sanction statement to the panelists B. Hearing panel determines disciplinary outcome and Title IX Coordinator sets ongoing remedies for protection of complainant and campus C. Outcome Letter issued to parties",
	appeals: "Either party may appeal Outcome Letter after hearing or no charge. Automatic appeal to Provost if expulsion upheld"
}

var complainantNodeIds = [
"contactCompl", 
"complNames", 
"complDeclinesName", 
"complDeclinesInvest", 
"complRequestsInvest", 
"noticeOfConcernSent", 
"nonHearingRes", 
"appeals"
];

var accusedNodeIds = [
"noticeOfConcernSent",
"nonHearingRes",
"appeals",
"responsibilityNotFound",
"responsibilityFound",
"charged",
"noCharge"
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
	 
	 // Instantiate tooltips on nodes
	 Object.keys(nodeBodyTextById).forEach(function(id) {
	 	$("#" + id + " div").prop("title", nodeBodyTextById[id]);
	 });
	 $(document).tooltip();

	 $("rect").prop("fill", "skyblue");

	 onNodeMouseEnter("show-complainant", complainantNodeIds, "red");
	 onNodeMouseLeave("show-complainant", complainantNodeIds, "black");

	 onNodeMouseEnter("show-accused", accusedNodeIds, "red");
	 onNodeMouseLeave("show-accused", accusedNodeIds, "black");
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