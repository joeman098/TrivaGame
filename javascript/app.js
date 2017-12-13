var time = 15 ;
var intervalId ;
var playing = false;
var stats = {
	correct: 0,
	error: 0,
}
var question = [
"Who were there first two astronauts that landed on the moon in 1969?",
"Which one of these is not a insect?",
"Which has more vitamin C?",
"What is the largest planet of our Solar System called?",
"How many days can a flu virus live in bills?",
"What is the brightest star in the night?",

]
var options = [
"A. Neil Armstrong and Buzz Aldrin <br> B. Beil Barmstrong and Nuzz Nldrin <br> C. Your mom",
"A. Flea <br> B. Tick  <br> C. Mosquito",
"A. Paprika <br> B. Orange <br> C. Potatoe ",
"A. Jupiter <br> B. Saturn <br> C. Uranus",
"A. 2 <br> B. 8 <br> C.17",
"A. North star <br> B. Arturus <br> C. Sirius",
]
var answer = [
"A",
"B",
"A",
"A",
"C",
"C",

]

var qnum = -1;
var playeranswer ;



$(document).ready(function(){
$("#but").children().prop("disabled",true);	

	$("#start").on("click", countdown);
	$("#btn1").on("click", function(){
		playeranswer = "A" ;
		answer();
	})	
	$("#btn2").on("click", function(){
		playeranswer = "B" ;
		answer();
	})	
	$("#btn3").on("click", function(){
		playeranswer = "C";
		answer();
	})	

			
		function countdown(){
			$("#but").children().prop("disabled",false);
			$("#start").prop("disabled",true);	
			$("#stats").children().empty();
			window.intervalId = setInterval(decrament, 1000);
			playing = true;
			qnum ++
			$("#question").html(question[qnum])
			$("#options").html(options[qnum]);
}
			function decrament(){
				time --;
				$("#time").html("<h2>" + time + "</h2>");

				if (time === 0) {
					stop();
				}

			}
			function stop(){
				restart();
					$("#time").html("<h2> TIMES UP</h2>");
					$("#question").html("FAIL");
			}
		
		
			function gameover(){
				restart();
					$("#time").html("<h2> GAMES OVER</h2>");
					$("#question").html("Thanks for playing");
							
			}
		function restart(){
					clearInterval(window.intervalId);
					$("#options").html("=D");
					$("#but").children().prop("disabled",true);	
					$("#start").prop("disabled",false);	
					time = 15;	
					qnum = -1;
					stats.correct = 0;
					stats.error = 0;

		}
		function correct(){
			clearInterval(window.intervalId);
			$("#but").children().prop("disabled",true);	
			$("#question").html("<img src='./images/correct.gif'>");
			$("#options").html("<h2> CORRECT ! <br> </h2>"+"<h2>" + window.answer[qnum] +"</h2>");
			setTimeout(nextquestion,5000);
		}
		function wrong(){
			clearInterval(window.intervalId);
			$("#but").children().prop("disabled",true);	
			$("#question").html("<img src='./images/wrong.gif'>");
			$("#options").html("<h2> WRONG ! <br> correct answer was </h2>" + "<h2>" + window.answer[qnum] +"</h2>");
			setTimeout(nextquestion,5000);
		}

		function nextquestion(){
			qnum ++
			time = 15;
			window.intervalId = setInterval(decrament, 1000);
			$("#question").html(question[qnum]);
			$("#options").html(options[qnum]);
			$("#but").children().prop("disabled",false);	

			if (qnum === question.length) {
					gameover();
				}

		}
		function answer(){
			
			if (window.playeranswer === window.answer[qnum] ) {
				console.log("yay");
				correct();
				stats.correct ++
				$("#correct").html(stats.correct);
			}
			else{
				stats.error ++
				wrong();	
				$("#wrong").html(stats.error);
			}
		}
		

});