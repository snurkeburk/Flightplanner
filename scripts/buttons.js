function hide() {
    let showTools = document.getElementById("show-tools");
    if (showTools.style.display === "none") {
        showTools.style.display = "flex";
    } else {
        showTools.style.display = "none";
    }
  }


function refresh(){
    location.reload();
}

function help(){
    let helpBtn = document.getElementById("helpBtn");
    let showHelp = document.getElementById("help");
    if (showHelp.style.display === "none") {
        showHelp.style.display = "block";
    } else {
        showHelp.style.display = "none";
    }
}