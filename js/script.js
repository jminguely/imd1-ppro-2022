console.log('script started')

var functionIsRunning = false;

function menuOpen() {
    document.getElementById("viewport").classList.toggle('open');
    if (!functionIsRunning) {
        functionIsRunning = true;
        console.log('function worked');
    } else if (!functionIsRunning) {
        functionIsRunning = false;
        console.log('function stoped to work');
    }
}

window.onload = function() {
    var elements = document.getElementsByClassName("each-word");
    for (var i=0; i<elements.length; i++) {
      elements[i].innerHTML = elements[i].innerHTML.replace(/\\b([a-z])([a-z]+)?\\b/gim, "<span class='first-letter'>$1</span>$2");
    }
}