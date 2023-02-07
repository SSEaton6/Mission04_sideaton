$("#sendbtn").click(function () {
   // grabs the values input by the user and makes sure that they are numbers
    var assignments = Number($("#Assignments").val());
    var quizzes = Number($("#Quizzes").val());
    var gprojects = Number($("#GroupProjects").val());
    var intex = Number($("#Intex").val());
    var finalexam = Number($("#FinalExam").val());
    var midexam = Number($("#MidExam").val());
    // calculates final percent based on the weights provided in the syllabus
    var finalpercent = (assignments * .5) + (quizzes * .1) + (gprojects * .1) + (intex * .1) + (midexam * .1) + (finalexam * .1);
 
    // initializes the output string and assigns it a letter based on the grade. 
    outputstring = '';
    if (finalpercent >= 94.00) {
        outputstring = 'A'
    }
    else if (finalpercent >= 90.00) {
        outputstring = 'A-'
    }
    else if (finalpercent >= 87.00) {
        outputstring = 'B+'
    }
    else if (finalpercent >= 84.00) {
        outputstring = 'B'
    }
    else if (finalpercent >= 80.00) {
        outputstring = 'B-'
    }
    else if (finalpercent >= 74.00) {
        outputstring = 'C+'
    }
    else if (finalpercent >= 70.00) {
        outputstring = 'C'
    }
    else if (finalpercent >= 67.00) {
        outputstring = 'C-'
    }
    else if (finalpercent >= 64.00) {
        outputstring = 'D+'
    }
    else if (finalpercent >= 60.00) {
        outputstring = 'D-'
    }
    else {
        outputstring = 'E'
    }
    // outputs the output string to the innerhtml of a p tag inside of the form.
    //$("#grade").html("Grade: " + outputstring);
    alert("Grade: " + outputstring);
})