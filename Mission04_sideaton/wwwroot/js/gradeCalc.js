$("#sendbtn").click( function () {
   
    var assignments = Number($("#assignments").val());
    var quizzes = Number($("#quizzes").val());
    var gprojects = Number($("#groupProjects").val());
    var intex = Number($("#intex").val());
    var finalexam = Number($("#finalexam").val());
    var midexam = Number($("#midexam").val());
   
    var finalpercent = (assignments * .5) + (quizzes * .1) + (gprojects * .1) + (intex * .1) + (midexam * .1) + (finalexam * .1);
 
    
    outputstring = '';
    if (finalpercent >= 94) {
        outputstring = 'A'
    }
    else if (finalpercent >= 90) {
        outputstring = 'A-'
    }
    else if (finalpercent >= 87) {
        outputstring = 'B+'
    }
    else if (finalpercent >= 84) {
        outputstring = 'B'
    }
    else if (finalpercent >= 80) {
        outputstring = 'B-'
    }
    else if (finalpercent >= 74) {
        outputstring = 'C+'
    }
    else if (finalpercent >= 70) {
        outputstring = 'C'
    }
    else if (finalpercent >= 67) {
        outputstring = 'C-'
    }
    else if (finalpercent >= 64) {
        outputstring = 'D+'
    }
    else if (finalpercent >= 60) {
        outputstring = 'D-'
    }
    else {
        outputstring = 'E'
    }
    $("#grade").html("Grade: " + outputstring);
})