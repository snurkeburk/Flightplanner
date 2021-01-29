
const getPosts = () => {
    fetch('https://sv.allmetsat.com/metar-taf/europa.php?icao=ESSA')
    .then(res => res.text())
    .then(posts => document.getElementById("dev-arr").innerHTML = posts)
    

}


    //Call the function that will automatically run renderQuote() also 
       getPosts();
