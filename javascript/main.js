//import selected route from route.js and draw line between dots
function test() {
var depname = document.getElementById("dep").value;
let airports = ['ESSA','ESSB','ENGM','KORD', 'EHAM','EGKK'];
let airportsS = ['ESSA','ESSB','ENGM','KORD', 'EHAM','EGKK'];
var brightMap = document.getElementById("map-bright");
var darkMap = document.getElementById("map-dark");
var i = 0;
while(i < airports.length){
    var depname = document.getElementById("dep").value;
    var arrname = document.getElementById("arr").value;

    colorChange();

    if (airports[i] == depname){
        console.log(depname);
        i = 0;
        while(i < airports.length){
        if(airports[i] == arrname){
            console.log(arrname);
            i = airports.length;
            document.getElementById(arrname).style.backgroundColor = "lightgreen";

        } else {
            console.log("arrival not found, trying again...")
            i = i+1;
        }
    }
        i = airports.length;
        document.getElementById(depname).style.backgroundColor = "lightgreen";

        //get coords
    } else {
        console.log("departure not found, trying again...");
        i = i+1;
    }
    
}

}

function colorChange(){
    var depname = document.getElementById("dep").value;
    var arrname = document.getElementById("arr").value;

}

//dark mode 
//            darkMap.style.display = "none";
//            brightMap.style.display = "block";