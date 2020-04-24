//memory for getFibonacci
var doneFibonacci = false;

//toggle fibonacci sequence
function getFibonacci() {
  if (doneFibonacci) {
	doneFibonacci = false;
	document.getElementById("demo").innerHTML = "I'm trying to learn how to code in Javascript and HTML.";
	return;
  }
  
  var i;
  var prevNum = 1;
  var curNum = 1;
  document.getElementById("demo").innerHTML += "<br>";
  document.getElementById("demo").innerHTML += 1 + "<br>";
  document.getElementById("demo").innerHTML += 1 + "<br>";
  for(i = 0; i < 21; i++) {
    curNum += prevNum;
	prevNum = curNum - prevNum;
	document.getElementById("demo").innerHTML += curNum + "<br>";
  }
  
  doneFibonacci = true;
}