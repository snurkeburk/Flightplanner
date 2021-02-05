function hide() {
    var showTools = document.getElementById("show-tools");
    if (showTools.style.display === "none") {
        showTools.style.display = "flex";
    } else {
        showTools.style.display = "none";
    }
  }


function refresh(){
    location.reload();
}