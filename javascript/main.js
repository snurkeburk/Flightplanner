//import selected route from route.js and draw line between dots

let airports = ['ESSA','ENGM','KORD', 'EHAM','EGKK','KLAS',
                'KLAX','LIRN','EFHK','ZBAA','OMDB','RJTT','LFPG',
                'VHHH','VIDP'];

function test() {
var depname = document.getElementById("dep").value;
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
        rect();
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

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// example use
function rect(){
var depname = document.getElementById('dep').value;
var arrname = document.getElementById("arr").value;
var div = document.getElementById(depname);
var divOffset = offset(div);
var divsecond = document.getElementById(arrname);
var divsecondOffset = offset(divsecond);
console.log(divsecondOffset.left, divsecondOffset.top);
console.log(divOffset.left, divOffset.top);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 1.2;
ctx.strokeStyle = 'lightblue';
ctx.beginPath();

var a = divOffset.left - divsecondOffset.left;
var b = divOffset.top - divsecondOffset.top;

var c = Math.sqrt( a*a + b*b );

var cp1x = divOffset.left + 0;
var cp1y = divOffset.top + 0;
console.log("C = " + c)
var r = Math.floor(Math.random() * 2);
if (divsecondOffset.left < divOffset.left){
    var cp2x = divsecondOffset.left + c/2;
    var cp2y = divsecondOffset.top + c - 100;
} else {
    var cp2x = divsecondOffset.left - c/2;
    var cp2y = divsecondOffset.top - c + 100;
}

if (c > 300){
    var cp2y = divsecondOffset.top - c + 500;
}
if (c < 70){
    var cp2y = divsecondOffset.top - c ;

}


console.log("R = " + r)

ctx.bezierCurveTo(cp1x, cp1y,cp2x,cp2y,divsecondOffset.left,divsecondOffset.top)
ctx.moveTo(divsecondOffset.left, divsecondOffset.top);
//ctx.lineTo(divOffset.left, divOffset.top);
ctx.stroke();

}


function randomRoute() {
    var randomDeparture = Math.floor(Math.random() * airports.length);
    var departure = airports[randomDeparture];
    document.getElementById('dep').value = departure;
    document.getElementById(departure).style.backgroundColor = "lightgreen";   
    var randomArrival = Math.floor(Math.random() * airports.length);
    var arrival = airports[randomArrival];
    document.getElementById('arr').value = arrival;
    document.getElementById(arrival).style.backgroundColor = "lightgreen";   
    console.log(departure, arrival);
    if (arrival == departure){
        randomRoute();
    } else {
        rect();
            //plus 1 på getBoundingClientRect och på ctx.stroke
    }
}



//dark mode 
//            darkMap.style.display = "none";
//            brightMap.style.display = "block";