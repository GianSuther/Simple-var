var name = prompt("What's your name?")
var checmistry =prompt("how much mark's in your chemistry,out of 100")
var physics =prompt("how much mark's in your physics,out of 100")
var science =prompt("how much mark's in your science,out of 100")
var urdu =prompt("how much mark's in your urdu,out of 100")


var obtainedMarks= Number(checmistry) + Number(physics) +Number(science)+Number(urdu)
var totalMarks =400
var percentage =(obtainedMarks/totalMarks)*100

if(percentage > 33 && percentage <= 45){
    console.log("You Got B Grade your percentage is: "+percentage+" %")
}
else if(percentage > 45 && percentage <= 70){
    console.log("You Got A Grade your percentage is: "+percentage+" %")
}
else if(percentage > 70 ){
    console.log("You Got A-1 Grade your percentage is: "+percentage+" %")
}
else{
    console.log("Sorry you are failed")
}








