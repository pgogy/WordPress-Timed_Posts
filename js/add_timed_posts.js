function add_timed_posts(){

	start_output = "";
	end_output = "";

	if(document.getElementById("start_enable").checked){
	
		start_output = "timed_post_start='" + document.getElementById("start1").value + " " + document.getElementById("start2").value +"'";
	
	}
	
	if(document.getElementById("end_enable").checked){
	
		end_output = "timed_post_end='" + document.getElementById("end1").value + " " + document.getElementById("end2").value +"'";
	
	}
	
	if(document.getElementById("start_enable").checked||document.getElementById("end_enable").checked){

		html_exist = jQuery("#content_ifr").contents().find("body").html();
		
		html_exist += "[timed_post " + start_output + 
																						" " + end_output + 
																						" timed_post_id='" + document.getElementById("timed_posts_post_id").value + 
																						"']";
		jQuery("#content_ifr").contents().find("body").html(html_exist);
		
	}else{
	
		alert("Timed post cannot be added when both boxes are checked.");
	
	}

}

function enable_start(){

	if(document.getElementById("start_enable").checked){
	
		document.getElementById("start1").disabled = false;
		document.getElementById("start2").disabled = false;
	
	}else{
	
		document.getElementById("start1").disabled = true;
		document.getElementById("start2").disabled = true;
	
	}

}

function enable_end(){

	if(document.getElementById("end_enable").checked){
	
		document.getElementById("end1").disabled = false;
		document.getElementById("end2").disabled = false;
	
	}else{
	
		document.getElementById("end1").disabled = true;
		document.getElementById("end2").disabled = true;
	
	}

}