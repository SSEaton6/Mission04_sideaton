$("#sendbtn").click( function () {
   // grabs the values input by the user and makes sure that they are numbers
    var assignments = Number($("#assignments").val());
    var quizzes = Number($("#quizzes").val());
    var gprojects = Number($("#groupProjects").val());
    var intex = Number($("#intex").val());
    var finalexam = Number($("#finalexam").val());
    var midexam = Number($("#midexam").val());

    // calculates final percent based on the weights provided in the syllabus
    var finalpercent = (assignments * .5) + (quizzes * .1) + (gprojects * .1) + (intex * .1) + (midexam * .1) + (finalexam * .1);
 
    // initializes the output string and assigns it a letter based on the grade. 
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
    // outputs the output string to the innerhtml of a p tag inside of the form.
    $("#grade").html("Grade: " + outputstring);
})