$(document).ready(function () {
    $("#quiz").hide();

    var $input = $('<input type="button" class="startButton" value="Accio Quiz!">');
    $input.appendTo($("body"));

    $(".startButton").click(function () {
        $("#quiz").show();

        $(".startButton").hide();

        setTimeout(function () {
            check();
        }, 30000);

        var number = 30
        var timer = setInterval(function () {
            decrement()
        }, 1000);

        function stop() {
            clearInterval(timer);
        }


        //  The decrement function.
        function decrement() {
            number--;

            //  Show the number in the #show-number tag.
            $("#show-number").html("<h2>" + number + "</h2>");

            //  Once number hits zero...
            if (number === 0) {

                //  ...run the stop function.
                stop();
            }
        }
    });
});

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    if (question1 == "Hogwarts") {
        correct++;
    }

    if (question2 == "Petunia & Vernon") {
        correct++;
    }

    if (question3 == "Ron") {
        correct++;
    }

    if (question4 == "Cat") {
        correct++;
    }

    if (question5 == "Sherbert Lemon") {
        correct++;
    }

    var messages = ["Piertotum Locomotor - Party!!", "Alohamora! - That's the Key!", "Wingardium Leviosa - Alright, mate!", "Sectumsempra - Bloody Shabby, Really.", "Stupify - 1 Right? Have you been stupified?!", "Avada Kedavra - Dead Wrong."];
    var pictures = ["assets/images/perfectScore.gif", "assets/images/fourRight.gif", "assets/images/threeRight.gif", "assets/images/twoRight.gif", "assets/images/oneRight.gif", "assets/images/zeroRight.gif"];

    var range;
    if (correct < 1) {
        range = 5;
    }

    if (correct > 0 && correct < 2) {
        range = 4;
    }

    if (correct > 1 && correct < 3) {
        range = 3;
    }

    if (correct > 2 && correct < 4) {
        range = 2;
    }

    if (correct > 3 && correct < 5) {
        range = 1;
    }

    if (correct > 4) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}