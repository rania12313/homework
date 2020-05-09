/**
 * Javascript Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and 
* move on to the next question.
 */


/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with , and changed the font color to blue.
 * We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
 */

function question1() {
    var q = document.getElementsByTagName("p");
    for(var i=0; i< q.length; i++)
    {  q[i].style.color="blue";}
  
}


/**
 * Question 2:
 * When button 2 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

function question2(){
    var nouv = document.getElementsByTagName("h2");
    for(var i=0; i< nouv.length; i++)
   { nouv[i].innerHTML='Ranya';}
 
}



/**
 * Question 3:
 * When button 3 is clicked, select the ordered list item that has the class "falseFact".
 * Using  change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */

function question3(){
    var x = document.getElementsByClassName("falseFact");
    for(var i=0; i< x.length; i++)
   { x[i].innerHTML='True Fact';}
}



/**
 * Question 4:
 * When button 4 is clicked, change the background color of the whole page to "pink"
 */
function question4(){
    var b =document.getElementById("bg");
	b.style.backgroundColor ="pink";
}


/**
 * Question 5:
 * When button 5 is clicked, change the color of all h2's to "green"
 */
function question5(){
	var couleur = document.getElementsByTagName("h2");
    for(var i=0; i< couleur.length; i++)
   { couleur[i].style.color="green";}
}


/**
 * Question 6:
 * When button 6 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
function question6(){
    var x= document.getElementsByTagName ("blockquote") ;
	var i ; 
	for (i = 0; i < x.length; i++) {
		x[i].innerHTML = "<span>no quote</span>";
    }		

}

 


/**
 * Question 7:
 * When button 7 is clicked, change the text in the header's h1 tag to read " Ninja"
 */
function question7(){
    var t = document.getElementsByTagName("h1");
    for(var i=0; i< t.length; i++)
   { t[i].innerHTML='Ninja';}
 
}

 

/*
 * Question 8:
 * Have the following code execute when button 8 is clicked.
 * var URL = http://www.sportune.fr/wp-content/uploads/2017/12/Cristiano-Ronaldo-jet.jpg
 * var x = document.getElementById("mySource").src  sourceObject.src = URL 
 */
function question8(){
    var URL = "http://www.sportune.fr/wp-content/uploads/2017/12/Cristiano-Ronaldo-jet.jpg ";
    document.getElementById("mySource").src = URL 	;
}
 

/**
 * Question 9:
 * When button 9 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */
function question9(){
    var c = document.getElementsByTagName("p");
    for(var i=0; i< c.length; i++)
    {  c[i].style.color="blue";
        c[i].style.fontFamily="Georgia";}
  
}


/**
 * Question 10:
 * When button 10 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * but with only one .element.setAttribute("style", "background-color: red;");
 */

// your answer here
function question10(){
	var x = document.getElementsByTagName("p") ;
	var i ; 
	for (i = 0; i < x.length; i++) {
	x[i].setAttribute("style", "color: blue;"); 
	x[i].style.fontFamily = "Georgia" ;
}
}