// Shortcut to get elements
var el = function(element) {
  if (element.charAt(0) === "#") { // If passed an ID...
    return document.querySelector(element); // ... returns single element
  }
  return document.querySelectorAll(element); // Otherwise, returns a nodelist
};
  
// Variables
var viewer = el("#input"), // Calculator screen where result is displayed
  equals = el("#hasil"), // Equal button
  nums = el(".num"), // List of numbers
  ops = el(".ops"), // List of operators
  theNum = "", // Current number
  oldNum = "", // First number
  resultNum, // Result
  operator, // Batman
  i;

var setNum = function(){
    if(resultNum){
        theNum = this.getAttribute("data-num")
        resultNum = ''
    }else{
        theNum+= this.getAttribute("data-num")
    }
    viewer.innerHTML = theNum
}

var moveNum = function(){
    oldNum = theNum
    theNum = ''
    operator = this.getAttribute('data-ops')
    equals.setAttribute('data-result','')
}
var output = function(){
    oldNum = parseFloat(oldNum)
    theNum = parseFloat(theNum)

    switch (operator) {
        case "tambah":
          resultNum = oldNum + theNum;
          break;
  
        case "kurang":
          resultNum = oldNum - theNum;
          break;
  
        case "kali":
          resultNum = oldNum * theNum;
          break;
  
        case "bagi":
          resultNum = oldNum / theNum;
          break;
  
          // If equal is pressed without an operator, keep number and continue
        default:
          resultNum = theNum;
      }

    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;
}
var modulus = function(){
    theNum/=100
    viewer.innerHTML = theNum
}

var minPlus = function(){

}

for(i = 0 ; i < nums.length ; i++){
    nums[i].onclick = setNum
}
for(i = 0 ; i < ops.length ; i++){
    ops[i].onclick = moveNum
}

var clear = function(){
    viewer.innerHTML = 0
    theNum = ''
}
equals.onclick = output

document.getElementById('clear').onclick = clear
document.getElementById('modulus').onclick = modulus
document.getElementById('min/plus').onclick = minPlus
