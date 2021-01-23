//import selected route from route.js and draw line between dots

let airports = ['ESSA','ENGM','KORD', 'EHAM','EGKK','KLAS',
                'KLAX','LIRN','EFHK','ZBAA','OMDB','RJTT','LFPG',
                'VHHH','VIDP'];


//function accepting route inputs then drawing them using rect()
function route() {
var depname = document.getElementById("dep").value;
var brightMap = document.getElementById("map-bright");
var darkMap = document.getElementById("map-dark");
var i = 0;
while(i < airports.length){
    var depname = document.getElementById("dep").value;
    var arrname = document.getElementById("arr").value;

    colorChange();
    //searching for a match within the airport array
    if (airports[i] == depname){
        console.log(depname);
        i = 0;
        while(i < airports.length){
        if(airports[i] == arrname){
            console.log(arrname);
            i = airports.length;
            document.getElementById(arrname).style.backgroundColor = "lightgreen";

        } else {
            console.log("arrival not found, trying again...") //airport "i" not found, i+1 for next one
            i = i+1; 
        }
    }
        rect();
        i = airports.length;
        document.getElementById(depname).style.backgroundColor = "lightgreen";

    } else {
        console.log("departure not found, trying again...");
        i = i+1;
    }
    
}
}

//function for color changing
function colorChange(){
    var depname = document.getElementById("dep").value;
    var arrname = document.getElementById("arr").value;

}

//function to create offsets for path
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


// function to draw the paths
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

var c = Math.sqrt( a*a + b*b ); // distance between airports

var cp1x = divOffset.left + 0;
var cp1y = divOffset.top + 0;
console.log("C = " + c)

// depending on which airport is more / less to left --> postive / neg curve
if (divsecondOffset.left < divOffset.left){
    var cp2x = divsecondOffset.left + c/2;
    var cp2y = divsecondOffset.top + c - 100;
} else {
    var cp2x = divsecondOffset.left - c/2;
    var cp2y = divsecondOffset.top - c + 100;
}

//depending on distance --> change max-height on curve

if (c > 300){
    var cp2y = divsecondOffset.top - c + 500;
}
if (c < 70){
    var cp2y = divsecondOffset.top - c ;

}



ctx.bezierCurveTo(cp1x, cp1y,cp2x,cp2y,divsecondOffset.left,divsecondOffset.top)
ctx.moveTo(divsecondOffset.left, divsecondOffset.top);
//ctx.lineTo(divOffset.left, divOffset.top);

// show values in "devbox"
let printx1 = document.getElementById('coordsx1');
let printdep = document.getElementById('dev-dep');
let printarr = document.getElementById('dev-arr');
let printy1 = document.getElementById('coordsy1');
let printx2 = document.getElementById('coordsx2');
let printy2 = document.getElementById('coordsy2');
let printc = document.getElementById('c-value');

printdep.innerHTML = depname;
printarr.innerHTML = arrname;
printx1.innerHTML = divOffset.left;
printy1.innerHTML = divOffset.top;
printx2.innerHTML = divsecondOffset.left;
printy2.innerHTML = divsecondOffset.top;
printc.innerHTML = c;

ctx.stroke();
}

//function for generating random routes
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
    if (arrival == departure){ //checks for doublicates
        randomRoute();
    } else {
        rect();
        
    }
}

