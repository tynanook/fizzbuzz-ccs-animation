 /*  declarations & assignments              */
 var startNumber = 1,
     stopNumber = 100;
 var i = 0;
 var correctFizzBuzzAnswer = [];
 var tempAnswer = "";
 var isFizz = false;
 var isBuzz = false;
 var isFizzBuss = false;

 /* format color to screen */
 document.getElementById("circlepath-text").style.color = "red";
 document.getElementById("circlepath-text").style.fontWeight = "900";
 document.getElementById("circlepath-text").style.fontSize = "2em";
 document.getElementById("circlepath-text").style.fontFamily = "Arial";

 /* go thru each iteration, calc expect ans, random gen student ans, 
 animate error, fizz, buzz, fizz buzz respons */
 for (i = startNumber; i <= stopNumber; i++) {

     /* calc Fizz Buzz */
     correctFizzBuzzAnswer.push(calcFizzBuzz(i));

     /* datalogs FizzBuzz results to both browser window and console w/1sec pause */
     timeout([startNumber, stopNumber+1], 1, function (i) {
        /* places correct answer on the screen & console log */
        document.getElementById("circlepath-text").innerHTML = correctFizzBuzzAnswer[i-1];
        console.log(correctFizzBuzzAnswer[i-1]);
     });
 } /* end of i-indexed loop */

 function calcFizzBuzz(i) {
     /* ------------  FizzBuzz Calculaltion ----------- */
    /* init assignments */
     isFizz = false;
     isBuzz = false;
     isFizzBuss = false;
     
     /* set to number */
     tempAnswer = i;
     
     /* if mod 3 = 0, then Fizz */
     if (i > 2 && i % 3 == 0) {
         isFizz = true;
         tempAnswer = "Fizz";
     }

     /* if mod 5 = 0, then Buzz */
     if (i > 4 && i % 5 == 0) {
         isBuzz = true;
         tempAnswer = "Buzz";
         /* if both then FizzBuzz */
         if (isFizz && isBuzz) {
             isFizzBuss = true;
             tempAnswer = "FizzBuzz";
         }
     }
     
     return tempAnswer;
;
 }

 /* function to allow second delay to view changes on screen */
 function timeout(range, time, callback) {
     var i = range[0];
     callback(i);
     Loop();

     function Loop() {
         setTimeout(function () {
             i++;
             if (i < range[1]) {
                 callback(i);
                 Loop();
             }
         }, time * 1000)
     }
 }