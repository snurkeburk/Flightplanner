//import selected route from route.js and draw line between dots


let airports = ['ESSA','ENGM','KORD', 'EHAM','EGKK','KLAS',
                'KLAX','LIRN','EFHK','ZBAA','OMDB','RJTT','LFPG',
                'VHHH','VIDP'];
/*
if (c > 650){
   
    if (divsecondOffset.left < divOffset.left){ // från höger till vänster
        var chalf = c / 2;
        secondRoute();
        
    }
}
*/
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
           
                i = airports.length;
            
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
ctx.setLineDash([0, 0]);
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
// if distance is too long --> consider a better route to get to dest
if (c > 600) {
    ctx.strokeStyle = 'red';     
    ctx.setLineDash([0, 0]);
    ctx.stroke();
    if (divsecondOffset.left < divOffset.left){ //från höger till vänster
        console.log("arr är mot vänster");
        for (var i = 0; i < airports.length; i++){
            var newarrname = airports[i];
            var newdiv = document.getElementById(depname);
            var newdivOffset = offset(newdiv);
            var newdivsecond = document.getElementById(newarrname);
            var newdivsecondOffset = offset(newdivsecond);
            var aa = divOffset.left - newdivsecondOffset.left;
            var ba = divOffset.top - newdivsecondOffset.top;
            var ca = Math.sqrt( aa*aa + ba*ba );
            var ab = divOffset.left - newdivsecondOffset.left;
            var bb = divOffset.top - newdivsecondOffset.top;
            var cb = Math.sqrt( ab*ab + bb*bb );
            console.log("cb = " + cb);
            if (cb > c/2){
                i = i +1 ;
                console.log("cb > 500");
            } else {
            var newcp1x = newdivOffset.left + 0;
            var newcp1y = newdivOffset.top + 0;
            var newcp2x = newdivsecondOffset.left + ca/2;
            var newcp2y = newdivsecondOffset.top + c - 700;
            console.log(newdivsecondOffset.left, newdivsecondOffset.top);
            console.log(newdivOffset.left, newdivOffset.top);

            ctx.beginPath();
            ctx.strokeStyle = "lightgreen";
            ctx.setLineDash([5, 5]);

            console.log(newarrname + "   ca = " + ca);

            ctx.bezierCurveTo(cp1x, cp1y,newcp2x,newcp2y,newdivsecondOffset.left,newdivsecondOffset.top)
            ctx.moveTo(newdivsecondOffset.left, newdivsecondOffset.top);

            arrname = document.getElementById("arr").value;
            newdivsecond = document.getElementById(arrname);   
            newdivsecondOffset = offset(newdivsecond);
            div = document.getElementById(newarrname);
            divOffset = offset(div);


            var newcp2x = newdivsecondOffset.left + cb/2;
            var newcp2y = newdivsecondOffset.top - 0;
          
            ctx.bezierCurveTo(newcp2x, newcp2y,newcp2x,newcp2y,newdivsecondOffset.left,newdivsecondOffset.top)
            ctx.moveTo(newdivsecondOffset.left, newdivsecondOffset.top);
            i = airports.length;
        }
            
            } 

        } else if (divsecondOffset.left > divOffset.left) {
            console.log("arr är mot höger");
            for (var i = 0; i < airports.length; i++){
                var newarrname = airports[i];
            var newdiv = document.getElementById(depname);
            var newdivOffset = offset(newdiv);
            var newdivsecond = document.getElementById(newarrname);
            var newdivsecondOffset = offset(newdivsecond);
            var aa = divOffset.left - newdivsecondOffset.left;
            var ba = divOffset.top - newdivsecondOffset.top;
            var ca = Math.sqrt( aa*aa + ba*ba );
            var newcp1x = newdivOffset.left + 0;
            var newcp1y = newdivOffset.top + 0;
            var newcp2x = newdivsecondOffset.left - ca/2;
            var newcp2y = newdivsecondOffset.top + c - 700;
            console.log(newdivsecondOffset.left, newdivsecondOffset.top);
            console.log(newdivOffset.left, newdivOffset.top);
            var ab = divOffset.left - newdivsecondOffset.left;
            var bb = divOffset.top - newdivsecondOffset.top;
            var cb = Math.sqrt( ab*ab + bb*bb );
            console.log("cb = " + cb);
            if (cb > c/2){
                i = i + 1;
                console.log("cb > 500");
            } else { 
            ctx.beginPath();
            ctx.strokeStyle = "lightgreen";
            ctx.setLineDash([5, 5]);

            console.log(newarrname + "   ca = " + ca);

            ctx.bezierCurveTo(cp1x, cp1y,newcp2x,newcp2y,newdivsecondOffset.left,newdivsecondOffset.top)
            ctx.moveTo(newdivsecondOffset.left, newdivsecondOffset.top);

            arrname = document.getElementById("arr").value;
            newdivsecond = document.getElementById(arrname);   
            newdivsecondOffset = offset(newdivsecond);
            div = document.getElementById(newarrname);
            divOffset = offset(div);         
            var newcp2x = newdivsecondOffset.left - cb/2;
            var newcp2y = newdivsecondOffset.top - 0;
                ctx.bezierCurveTo(newcp2x, newcp2y,newcp2x,newcp2y,newdivsecondOffset.left,newdivsecondOffset.top)
                ctx.moveTo(newdivsecondOffset.left, newdivsecondOffset.top);             
                i = airports.length;        
            }

            }
        } else {
            console.log(newarrname + " was to far away" + " ca = " + ca);
            
        }
    }



// show values in "devbox"

let printx1Big = document.getElementById('coordsx1-big');
let printdepBig = document.getElementById('dev-dep-big');
let printarrBig = document.getElementById('dev-arr-big');
let printy1Big = document.getElementById('coordsy1-big');
let printx2Big = document.getElementById('coordsx2-big');
let printy2Big = document.getElementById('coordsy2-big');
let printcBig = document.getElementById('c-value-big');

printdepBig.innerHTML = depname;
printarrBig.innerHTML = arrname;
printx1Big.innerHTML = divOffset.left;
printy1Big.innerHTML = divOffset.top;
printx2Big.innerHTML = divsecondOffset.left;
printy2Big.innerHTML = divsecondOffset.top;
printcBig.innerHTML = c;
ctx.stroke();

}

//function for generating random routes
function randomRoute() {
    var randomDeparture = Math.floor(Math.random() * airports.length);
    var departure = airports[randomDeparture];
    document.getElementById('dep').value = departure;
    document.getElementById(departure).style.backgroundColor = "lightgreen";   
    let randomArrival = Math.floor(Math.random() * airports.length);
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


function climbChart(){
        let randomNummer = [];
        for (let i = 0; i< 11; i++){
            let rnd = Math.floor(Math.random() * 30);
            randomNummer.push(rnd);
        }
        randomNummer.sort((a,b)=>a-b);
        console.table(randomNummer);
        
        const ctx = document.getElementById('chart').getContext('2d');        
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['T/O', '1nm', '10nm', '20nm', '30nm', '40nm','50nm','60nm','70nm','80nm','TOC'],
                datasets: [{
                    label: 'Climb in feet (*10^4)',
                    data: randomNummer,
                    backgroundColor: [
                        'rgba(40, 130, 158, 0.1)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(0, 255, 64, 1.2)',                   
                    ],
                    borderColor: [
                        'rgba(0, 204, 255,1);',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',            
                    ],
                    borderWidth: 2
                }]
            },
            options: {

                scales: {
                    yAxes: [{
                        ticks: {
                            
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        
    }


    function decendChart(){
        let randomNummer = [];
        for (let i = 0; i< 11; i++){
            let rnd = Math.floor(Math.random() * 30);
            randomNummer.push(rnd);
        }
        randomNummer.sort((a,b)=>b-a);
        console.table(randomNummer);

        const ctx2 = document.getElementById('decendChart').getContext('2d');        
        const myChart2 = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['TOD', '80nm', '70nm', '60nm', '50nm', '40nm','30nm','20nm','10nm','1nm','Arrival'],
                datasets: [{
                    label: 'Decend in feet (*10^4)',
                    data: randomNummer,
                    backgroundColor: [
                        'rgba(40, 130, 158, 0.1)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(0, 255, 64, 1.2)',                   
                    ],
                    borderColor: [
                        'rgba(0, 204, 255,1);',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',
                        'rgba(40, 130, 158, 1)',            
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            
                            
                        }
                    }]
                }
            }
        });
        
    }
