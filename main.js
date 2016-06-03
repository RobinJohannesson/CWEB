function loading() {
    document.getElementById("meny").style.display = "none";
}
window.onload = loading();

function openCloseMenu() {
    
    var stangMeny = document.getElementById("closemeny"),
        meny = document.getElementById("meny");
    
    if (meny.style.display == "none") {
        meny.style.display = "block";
    } else {
        meny.style.display = "none";
    }
}